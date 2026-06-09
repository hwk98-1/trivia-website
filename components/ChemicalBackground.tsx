"use client";
import { useEffect, useRef } from "react";

const FORMULAS = [
  "C₁₀H₁₅N", "CH₃NH₂", "HF", "Ba(OH)₂", "C₆H₅CN", "NaOH",
  "H₂SO₄", "P₂I₄", "HCl", "NH₃", "KMnO₄", "BaSO₄", "C₁₀H₁₅NO",
  "Fe₂O₃", "CH₃OH", "C₂H₅OH", "Na₂Cr₂O₇", "Pb(NO₃)₂", "C₆H₅CHO",
];

export default function ChemicalBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = ref.current;
    if (!bg) return;
    for (let i = 0; i < 22; i++) {
      const el = document.createElement("div");
      el.className = "cf";
      el.textContent = FORMULAS[Math.floor(Math.random() * FORMULAS.length)];
      el.style.left = Math.random() * 100 + "%";
      el.style.animationDelay = Math.random() * 22 + "s";
      el.style.animationDuration = 14 + Math.random() * 16 + "s";
      el.style.fontSize = 10 + Math.random() * 7 + "px";
      bg.appendChild(el);
    }
    return () => { bg.innerHTML = ""; };
  }, []);

  return <div className="chem-bg" ref={ref} />;
}
