"use client";
import { useState } from "react";
import type { Team } from "@/lib/types";

interface Props {
  teams: Team[];
  onReady: (turnOrder: number[]) => void;
}

export default function CoinFlip({ teams, onReady }: Props) {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult]     = useState<{ name: string; color: string } | null>(null);
  const [turnOrder, setTurnOrder] = useState<number[]>([]);

  function doFlip() {
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      const first  = Math.floor(Math.random() * teams.length);
      const second = teams.length > 1 ? 1 - first : 0;
      const order: number[] = [];
      if (teams.length === 1) {
        for (let i = 0; i < 10; i++) order.push(0);
      } else {
        for (let i = 0; i < 10; i++) { order.push(first); order.push(second); }
      }
      setTurnOrder(order);
      setSpinning(false);
      setResult({
        name:  teams[first].name === "walter" ? "WALTER WHITE" : "JESSE PINKMAN",
        color: teams[first].name === "walter" ? "var(--green)" : "var(--blue)",
      });
    }, 1700);
  }

  return (
    <div className="screen-enter">
      <div className="sec-title">// COIN FLIP //</div>
      <div className="coin-wrap">
        <div className={`coin${spinning ? " spin" : ""}`}>
          {result ? result.name[0] : "?"}
        </div>

        {result && (
          <>
            <div className="flip-result" style={{ color: result.color }}>
              {result.name} GOES FIRST!
            </div>
            <div className="flip-sub">THE COIN HAS SPOKEN. PREPARE YOUR KNOWLEDGE.</div>
          </>
        )}

        {!result && !spinning && (
          <button className="btn btn-yellow" onClick={doFlip}>— FLIP THE COIN —</button>
        )}
        {result && (
          <button className="btn btn-green" onClick={() => onReady(turnOrder)}>— BEGIN —</button>
        )}
      </div>
    </div>
  );
}
