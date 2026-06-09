"use client";
import { useState } from "react";
import ChemicalBackground from "@/components/ChemicalBackground";
import TitleScreen        from "@/components/TitleScreen";
import PlayerSelect       from "@/components/PlayerSelect";
import TeamSelect         from "@/components/TeamSelect";
import CoinFlip           from "@/components/CoinFlip";
import TurnOverlay        from "@/components/TurnOverlay";
import GameScreen         from "@/components/GameScreen";
import ResultsScreen      from "@/components/ResultsScreen";
import { SET_A, SET_B }   from "@/lib/questions";
import { initGame }       from "@/lib/types";
import type { GameState, Screen, Team, TeamName } from "@/lib/types";

export default function Home() {
  const [screen, setScreen]           = useState<Screen>("title");
  const [game, setGame]               = useState<GameState>(initGame());
  const [showOverlay, setShowOverlay] = useState(false);

  // ── PLAYER SELECT ──────────────────────────────────────
  function pickPlayers(n: number) {
    setGame({ ...initGame(), numPlayers: n });
    setScreen("teamSelect");
  }

  // ── TEAM SELECT ────────────────────────────────────────
  function pickTeam(name: TeamName) {
    const cls: "w" | "j" = name === "walter" ? "w" : "j";
    const qs = name === "walter" ? [...SET_A] : [...SET_B];
    const team: Team = { name, cls, qs, score: 0, answers: [] };

    // Use functional update so we read the latest state, not the closure
    setGame(prev => {
      const isSecondPlayer = prev.numPlayers === 2 && prev.selectingIdx === 0;
      return {
        ...prev,
        teams:       [...prev.teams, team],
        selectingIdx: isSecondPlayer ? 1 : prev.selectingIdx,
      };
    });

    // Navigate: if player 1 of 2 just picked, stay on teamSelect for player 2
    if (game.numPlayers === 2 && game.selectingIdx === 0) {
      // no-op — TeamSelect will re-render with updated game.selectingIdx
    } else {
      setScreen("coinFlip");
    }
  }

  // ── COIN FLIP ──────────────────────────────────────────
  function coinReady(turnOrder: number[]) {
    setGame(prev => ({ ...prev, turnOrder, turnIdx: 0, tQIdx: [0, 0] }));
    setScreen("game");
  }

  // ── ANSWER ─────────────────────────────────────────────
  function handleAnswer(teamIdx: number, correct: boolean, correctAnswer: string) {
    setGame(prev => {
      const teams = prev.teams.map((t, i): Team => {
        if (i !== teamIdx) return t;
        return {
          ...t,
          score:   t.score + (correct ? 1 : 0),
          answers: [
            ...t.answers,
            { q: t.qs[prev.tQIdx[i]].q, ok: correct, correct: correctAnswer },
          ],
        };
      });
      const tQIdx: [number, number] = [prev.tQIdx[0], prev.tQIdx[1]];
      tQIdx[teamIdx]++;
      return { ...prev, teams, tQIdx };
    });
  }

  // ── NEXT TURN ──────────────────────────────────────────
  function handleNext() {
    const nextIdx = game.turnIdx + 1;
    setGame(prev => ({ ...prev, turnIdx: nextIdx }));

    if (nextIdx >= game.turnOrder.length) {
      setScreen("results");
    } else if (game.numPlayers === 2) {
      setShowOverlay(true);
    }
  }

  function overlayReady() { setShowOverlay(false); }

  // ── RESTART ────────────────────────────────────────────
  function restart() {
    setGame(initGame());
    setShowOverlay(false);
    setScreen("title");
  }

  // ── DERIVED ────────────────────────────────────────────
  const takenTeam: TeamName | null =
    game.teams.length > 0 && game.selectingIdx === 1 ? game.teams[0].name : null;

  const overlayTi   = game.turnOrder[game.turnIdx] ?? 0;
  const overlayTeam = game.teams[overlayTi];
  const overlayQNum = (game.tQIdx[overlayTi] ?? 0) + 1;

  return (
    <>
      <ChemicalBackground />

      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div className="wrap">
          {screen === "title"        && <TitleScreen onStart={() => setScreen("playerSelect")} />}
          {screen === "playerSelect" && <PlayerSelect onSelect={pickPlayers} />}
          {screen === "teamSelect"   && (
            <TeamSelect
              numPlayers={game.numPlayers}
              selectingIdx={game.selectingIdx}
              takenTeam={takenTeam}
              onSelect={pickTeam}
            />
          )}
          {screen === "coinFlip" && <CoinFlip teams={game.teams} onReady={coinReady} />}
          {screen === "game" && game.teams.length > 0 && game.turnIdx < game.turnOrder.length && (
            <GameScreen game={game} onAnswer={handleAnswer} onNext={handleNext} />
          )}
          {screen === "results" && <ResultsScreen game={game} onRestart={restart} />}
        </div>
      </main>

      {showOverlay && overlayTeam && (
        <TurnOverlay team={overlayTeam} questionNum={overlayQNum} onReady={overlayReady} />
      )}
    </>
  );
}
