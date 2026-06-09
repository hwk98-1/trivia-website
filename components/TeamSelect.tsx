"use client";
import type { TeamName } from "@/lib/types";

interface Props {
  numPlayers: number;
  selectingIdx: number;
  takenTeam: TeamName | null;
  onSelect: (name: TeamName) => void;
}

export default function TeamSelect({ numPlayers, selectingIdx, takenTeam, onSelect }: Props) {
  const playerLabel =
    numPlayers === 1
      ? "PICK YOUR SIDE"
      : selectingIdx === 0
      ? "PLAYER 1 — PICK YOUR SIDE"
      : `PLAYER 1 CHOSE ${takenTeam === "walter" ? "WALTER WHITE" : "JESSE PINKMAN"} — PLAYER 2: PICK YOUR SIDE`;

  const title =
    numPlayers === 1
      ? "// CHOOSE YOUR TEAM //"
      : selectingIdx === 0
      ? "// PLAYER 1: CHOOSE YOUR TEAM //"
      : "// PLAYER 2: CHOOSE YOUR TEAM //";

  return (
    <div className="screen-enter">
      <div className="sec-title">{title}</div>
      <p className="info-text tc">{playerLabel}</p>
      <div className="team-row">
        <div
          className={`t-card w${takenTeam === "walter" ? " taken" : ""}`}
          onClick={() => takenTeam !== "walter" && onSelect("walter")}
        >
          <div className="elem">
            <span className="enum">74</span>
            <span className="esym">W</span>
            <span className="ename">WALTER</span>
          </div>
          <div className="tname">WALTER WHITE</div>
          <div className="tdesc">a.k.a. HEISENBERG</div>
          <div className="tdesc" style={{ marginTop: 8 }}>&ldquo;I AM THE DANGER&rdquo;</div>
        </div>

        <div
          className={`t-card j${takenTeam === "jesse" ? " taken" : ""}`}
          onClick={() => takenTeam !== "jesse" && onSelect("jesse")}
        >
          <div className="elem">
            <span className="enum">15</span>
            <span className="esym">Jp</span>
            <span className="ename">JESSE</span>
          </div>
          <div className="tname">JESSE PINKMAN</div>
          <div className="tdesc">a.k.a. CAP&apos;N COOK</div>
          <div className="tdesc" style={{ marginTop: 8 }}>&ldquo;YO, SCIENCE, B*TCH!&rdquo;</div>
        </div>
      </div>
    </div>
  );
}
