"use client";
import type { Team } from "@/lib/types";

interface Props {
  team: Team;
  questionNum: number;
  onReady: () => void;
}

export default function TurnOverlay({ team, questionNum, onReady }: Props) {
  const tname = team.name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN";
  const color = team.name === "walter" ? "var(--green)" : "var(--blue)";
  const diff  = team.qs[questionNum - 1]?.d ?? "easy";
  const diffLabel = diff === "easy" ? "EASY" : diff === "medium" ? "MEDIUM" : "HARD ⚠";

  return (
    <div className="turn-overlay show">
      <div className="to-inner">
        <div className="to-label">NEXT UP</div>
        <div className="to-name" style={{ color }}>{tname}</div>
        <div className="to-sub">IT&apos;S YOUR TURN!</div>
        <div className="to-qnum">
          QUESTION {questionNum} OF 10 · DIFFICULTY: {diffLabel}
        </div>
        <button
          className="btn"
          style={{ color, borderColor: color }}
          onClick={onReady}
        >
          — I&apos;M READY —
        </button>
      </div>
    </div>
  );
}
