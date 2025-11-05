"use client";

import { useEffect, useMemo, useState } from "react";

type MoodCard = {
  id: string;
  label: string;
  color: string;
  rotation: number;
};

const palette = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
const greetings = [
  "Hiii!",
  "Howdy!",
  "Hola!",
  "Salut!",
  "Ciao!",
  "Hej!",
  "Aloha!",
  "Yassou!"
];

function randomCard(): MoodCard {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2, 11);
  return {
    id,
    label: greetings[Math.floor(Math.random() * greetings.length)],
    color: palette[Math.floor(Math.random() * palette.length)],
    rotation: Math.floor(Math.random() * 12) - 6
  };
}

export default function Moodboard() {
  const [cards, setCards] = useState<MoodCard[]>(() =>
    Array.from({ length: 6 }, randomCard)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCards((prev) => {
        const [, ...rest] = prev;
        return [...rest, randomCard()];
      });
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const gradient = useMemo(() => {
    const colors = cards.map((card) => card.color).join(", ");
    return `radial-gradient(circle at top left, ${colors})`;
  }, [cards]);

  return (
    <div className="moodboard card">
      <div className="moodboard-header">
        <h2>Ambient Moodboard</h2>
        <p>Fresh greetings swirl in every couple of seconds.</p>
      </div>
      <div className="moodboard-grid" style={{ background: gradient }}>
        {cards.map((card) => (
          <span
            key={card.id}
            className="mood-card"
            style={{
              backgroundColor: card.color,
              transform: `rotate(${card.rotation}deg)`
            }}
          >
            {card.label}
          </span>
        ))}
      </div>
    </div>
  );
}
