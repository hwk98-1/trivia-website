"use client";
import { useState } from "react";
import type { GameState } from "@/lib/types";

const LETTERS = ["A", "B", "C", "D"] as const;

interface Props {
  game: GameState;
  onAnswer: (teamIdx: number, correct: boolean, correctAnswer: string) => void;
  onNext: () => void;
}

export default function GameScreen({ game, onAnswer, onNext }: Props) {
  const [answered, setAnswered]   = useState(false);
  const [selected, setSelected]   = useState<number | null>(null);
  const [nextLabel, setNextLabel] = useState("NEXT QUESTION →");

  const ti   = game.turnOrder[game.turnIdx];
  const team = game.teams[ti];
  const qi   = game.tQIdx[ti];
  const q    = team.qs[qi];
  const total = game.turnOrder.length;
  const progress = (game.turnIdx / total) * 100;

  function pickAnswer(idx: number) {
    if (answered) return;
    setAnswered(true);
    setSelected(idx);
    const ok = idx === q.c;
    onAnswer(ti, ok, q.o[q.c]);

    // label for next button
    if (game.turnIdx + 1 >= total) {
      setNextLabel("SEE RESULTS →");
    } else if (game.numPlayers === 2) {
      const nextTi = game.turnOrder[game.turnIdx + 1];
      const nextTeam = game.teams[nextTi];
      setNextLabel(`HAND OFF TO ${nextTeam.name === "walter" ? "WALTER" : "JESSE"} →`);
    } else {
      setNextLabel("NEXT QUESTION →");
    }
  }

  function handleNext() {
    setAnswered(false);
    setSelected(null);
    onNext();
  }

  const walterTeam = game.teams.find(t => t.name === "walter");
  const jesseTeam  = game.teams.find(t => t.name === "jesse");

  return (
    <div className="screen-enter">
      {/* Header */}
      <div className="game-top">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className={`team-badge ${team.cls}`}>
            {team.name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN"}
          </div>
          <div style={{ fontSize: 11, color: "var(--dim)" }}>
            TURN {game.turnIdx + 1}/{total}
          </div>
        </div>
        <div className="scores">
          {game.numPlayers === 2 ? (
            <>
              {walterTeam && (
                <div className="sc wscore">
                  <span className="sc-lbl">W. WHITE</span>
                  <span className="sc-val">{walterTeam.score}</span>
                </div>
              )}
              {jesseTeam && (
                <div className="sc jscore">
                  <span className="sc-lbl">J. PINKMAN</span>
                  <span className="sc-val">{jesseTeam.score}</span>
                </div>
              )}
            </>
          ) : (
            <div className="sc sscore">
              <span className="sc-lbl">SCORE</span>
              <span className="sc-val">{team.score}</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="prog-bar">
        <div className="prog-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Question card */}
      <div className="card">
        <span className={`diff-badge ${q.d}`}>{q.d.toUpperCase()}</span>
        <div className="q-num">QUESTION {qi + 1} OF 10</div>
        <div className="q-text">{q.q}</div>

        <div className="opts">
          {q.o.map((opt, i) => {
            let cls = "opt";
            if (answered) {
              if (i === q.c)          cls += " correct";
              else if (i === selected) cls += " wrong";
            }
            return (
              <button
                key={i}
                className={cls}
                disabled={answered}
                onClick={() => pickAnswer(i)}
              >
                <span className="opt-letter">{LETTERS[i]}</span>
                {opt}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`feedback-box ${selected === q.c ? "ok" : "no"}`}>
            {selected === q.c
              ? "✓  CORRECT!  +1 POINT"
              : `✗  WRONG!  CORRECT: "${q.o[q.c]}"`}
          </div>
        )}

        {answered && (
          <button className="next-btn" onClick={handleNext}>
            {nextLabel}
          </button>
        )}
      </div>
    </div>
  );
}
