import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Greeting Hub | Home"
};

const highlights = [
  {
    title: "Real-Time Moodboard",
    description:
      "Share how you feel with a single word and watch the moodboard bloom with colors and motion."
  },
  {
    title: "Curated Conversation Starters",
    description:
      "We crafted a playful set of prompts to keep the friendly vibes rolling after your first hello."
  },
  {
    title: "Autonomous Energy",
    description:
      "No approvals, no blockers—just pure, decisive execution powering every interaction."
  }
];

export default function HomePage() {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <span className="tag">You said hi—we answered with a hub.</span>
        <h1>Hello there, Friend!</h1>
        <p>
          Welcome to the Agentic Greeting Hub, a pocket-sized web experience that
          celebrates every friendly hello. Explore interactive vibes, discover
          new conversation starters, and soak up the warmth.
        </p>
        <div className="cta-row">
          <Link href="/about" className="btn primary">
            Peek Behind the Scenes
          </Link>
          <Link href="/contact" className="btn ghost">
            Say Something Else
          </Link>
        </div>
      </div>
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.title} className="highlight-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
