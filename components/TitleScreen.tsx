"use client";

interface Props { onStart: () => void; }

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="screen-enter">
      <div className="logo">
        <div className="logo-text">
          <span className="g el-box">
            <span className="el-num g">35</span>
            <span className="el-sym g">Br</span>
            <span className="el-name g">BROMINE</span>
          </span>
          <span className="y">eaking</span>
        </div>
        <div className="logo-text">
          <span className="g el-box">
            <span className="el-num g">56</span>
            <span className="el-sym g">Ba</span>
            <span className="el-name g">BARIUM</span>
          </span>
          <span className="y">d</span>
        </div>
        <div className="subtitle">// TRIVIA CHALLENGE //</div>
      </div>

      <div className="quote-block">
        &ldquo;Say my name.&rdquo; &nbsp;— &nbsp;Walter White, a.k.a. Heisenberg
      </div>

      <div className="card">
        <p className="info-text tc">
          Think you know the Blue Sky empire? Test your knowledge of Walter White,<br />
          Jesse Pinkman, and the Albuquerque drug trade.<br />
          10 questions per team. One champion.
        </p>
        <div className="tc">
          <button className="btn btn-green" onClick={onStart}>
            — START COOKING —
          </button>
        </div>
      </div>

      <div className="chem-strip">CH₃ · C₆H₅ · HF · C₁₀H₁₅N · Ba · NH₂ · NaOH</div>
    </div>
  );
}
