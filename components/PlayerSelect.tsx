"use client";

interface Props { onSelect: (n: number) => void; }

export default function PlayerSelect({ onSelect }: Props) {
  return (
    <div className="screen-enter">
      <div className="sec-title">// SELECT PLAYERS //</div>
      <div className="card">
        <p className="info-text tc">HOW MANY ARE ENTERING THE LAB TODAY?</p>
        <div className="tile-row">
          <div className="p-tile" onClick={() => onSelect(1)}>
            <span className="big">1</span>
            <span className="lbl">SOLO COOK</span>
          </div>
          <div className="p-tile" onClick={() => onSelect(2)}>
            <span className="big">2</span>
            <span className="lbl">PARTNERS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
