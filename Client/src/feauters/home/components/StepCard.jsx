import { useState } from "react";

// ─── Reusable StepCard Component ───────────────────────────────────────────
export function StepCard({ step, title, icon, description, tip, onClick }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      style={{
        background: active
          ? "linear-gradient(135deg, #1e3a5f 0%, #1a2a4a 100%)"
          : "linear-gradient(135deg, #1a2236 0%, #141c2e 100%)",
        border: active ? "1.5px solid #4a9eff55" : "1.5px solid #ffffff10",
        borderRadius: "14px",
        padding: "20px 22px",
        width: "210px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: active
          ? "0 0 24px #4a9eff22, 0 4px 16px #00000066"
          : "0 4px 16px #00000044",
        userSelect: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
    

      {/* Step badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4a9eff, #2563eb)",
          borderRadius: "8px",
          width: "28px",
          height: "28px",
          fontSize: "13px",
          fontWeight: "700",
          color: "#fff",
          marginBottom: "14px",
          boxShadow: "0 2px 8px #4a9eff44",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {step}
      </div>

      {/* Icon */}
      <div style={{ fontSize: "28px", marginBottom: "10px" ,marginLeft:"-4px"}}>{icon}</div>

      {/* Title */}
      <div
        style={{
          color: "#e8f0fe",
          fontSize: "15px",
          fontWeight: "600",
          fontFamily: "'Segoe UI', sans-serif",
          marginBottom: "8px",
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          color: "#8899bb",
          fontSize: "12px",
          fontFamily: "'Segoe UI', sans-serif",
          lineHeight: "1.5",
          marginBottom: tip ? "10px" : "0",
        }}
      >
        {description}
      </div>

      {/* Tip — shown on active */}
      {tip && active && (
        <div
          style={{
            background: "#ffffff0a",
            border: "1px solid #4a9eff33",
            borderRadius: "8px",
            padding: "8px 10px",
            color: "#7ab8ff",
            fontSize: "11px",
            fontFamily: "'Segoe UI', sans-serif",
            marginTop: "4px",
            animation: "fadeIn 0.2s ease",
          }}
        >
          💡 {tip}
        </div>
      )}
    </div>
  );
}

// ─── Demo Usage ─────────────────────────────────────────────────────────────
export const steps = [
  {
    step: 1,
    icon: "📷",
    title: "Open Camera",
    description: "Camera access karo aur apna chehra frame mein rakho.",
    tip: "navigator.mediaDevices.getUserMedia() use hoti hai",
  },
  {
    step: 2,
    icon: "🧠",
    title: "Detect Mood",
    description: "AI aapke expressions analyze karke mood detect karega.",
    tip: "Face landmarks + model inference yahan hoti hai",
  },
  {
    step: 3,
    icon: "🎵",
    title: "Get Songs",
    description: "Mood ke hisaab se best songs fetch kiye jaate hain.",
    tip: "Spotify / Last.fm API se playlist milti hai",
  },
  {
    step: 4,
    icon: "🎧",
    title: "Enjoy",
    description: "Apni personalized playlist enjoy karo!",
    tip: "Audio player embedded hoga yahan",
  },
];

