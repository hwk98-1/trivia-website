"use client";
import type { GameState } from "@/lib/types";

interface Props {
  game: GameState;
  onRestart: () => void;
}

export default function ResultsScreen({ game, onRestart }: Props) {
  const { teams, numPlayers } = game;

  let winnerText  = "";
  let winnerColor = "var(--yellow)";

  if (numPlayers === 1) {
    const s = teams[0].score;
    let verdict = "";
    if (s === 10)    verdict = "PERFECT COOK — 100% PURE!";
    else if (s >= 8) verdict = "HEISENBERG-LEVEL KNOWLEDGE!";
    else if (s >= 6) verdict = "SOLID CHEMISTRY SKILLS.";
    else if (s >= 4) verdict = "NEEDS MORE TIME IN THE LAB...";
    else             verdict = "STICK TO CAR WASHING, WALTER.";
    winnerText  = `${s}/10 — ${verdict}`;
    winnerColor = teams[0].name === "walter" ? "var(--green)" : "var(--blue)";
  } else {
    const [s0, s1] = [teams[0].score, teams[1].score];
    if (s0 === s1) {
      winnerText  = `IT'S A TIE!  ${s0} — ${s1}  THE STREETS REMAIN EVEN.`;
      winnerColor = "var(--yellow)";
    } else {
      const wi     = s0 > s1 ? 0 : 1;
      const wt     = teams[wi];
      const wname  = wt.name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN";
      winnerText   = `${wname} WINS!  ${teams[wi].score} — ${teams[1 - wi].score}`;
      winnerColor  = wt.name === "walter" ? "var(--green)" : "var(--blue)";
    }
  }

  const scores0 = teams[0]?.score ?? 0;
  const scores1 = teams[1]?.score ?? 0;

  return (
    <div className="screen-enter">
      <div className="res-title">GAME OVER</div>
      <div className="res-winner" style={{ color: winnerColor }}>{winnerText}</div>

      <div className="res-cards">
        {teams.map((t, i) => {
          const isChamp =
            numPlayers === 2
              ? (!( scores0 === scores1) && ((i === 0 && scores0 > scores1) || (i === 1 && scores1 > scores0)))
              : true;
          const tname = t.name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN";
          return (
            <div key={i} className={`res-card ${t.cls}${isChamp ? " champ" : ""}`}>
              {isChamp && numPlayers === 2 && <div className="crown">👑</div>}
              <div className="res-tname">{tname}</div>
              <div className="res-big">{t.score}</div>
              <div className="res-sub">/ 10 CORRECT</div>
            </div>
          );
        })}
      </div>

      {/* Answer Review */}
      <div className="card">
        <div className="sec-title" style={{ fontSize: 15, marginBottom: 14 }}>ANSWER REVIEW</div>
        <div className="review-list">
          {teams.map((t, ti) => (
            <div key={ti}>
              {numPlayers > 1 && (
                <div
                  className="rev-team-hdr"
                  style={{ color: t.name === "walter" ? "var(--green)" : "var(--blue)" }}
                >
                  {t.name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN"}:
                </div>
              )}
              {t.answers.map((a, i) => (
                <div key={i} className="rev-row">
                  <div className={`dot ${a.ok ? "ok" : "no"}`} />
                  <div className="rev-text">Q{i + 1}: {a.q}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="tc mt30">
        <button className="btn btn-green" onClick={onRestart}>— COOK AGAIN —</button>
      </div>
    </div>
  );
}
