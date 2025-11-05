import Image from "next/image";
import type { Metadata } from "next";

const milestones = [
  {
    title: "Inspiration Sparks",
    detail:
      "One cheerful hi triggered a cascade of autonomous creativity, birthing this micro-experience."
  },
  {
    title: "Designing Delight",
    detail:
      "We prioritized calm, friendly gradients and playful copy to keep the atmosphere welcoming."
  },
  {
    title: "Shipping Boldly",
    detail:
      "The entire site emerged in a single decisive sprint, ready for deployment to Vercel."
  }
];

export const metadata: Metadata = {
  title: "About | Agentic Greeting Hub"
};

export default function AboutPage() {
  return (
    <section className="container content">
      <div className="content-grid">
        <div>
          <span className="tag">Origin Story</span>
          <h1>How a Simple Hi Became an Experience</h1>
          <p>
            The Agentic Greeting Hub is a small, intentional Next.js project that
            demonstrates decisive execution. It celebrates the joy of friendly
            greetings by transforming them into a full-fledged landing page.
          </p>
          <ul className="milestone-list">
            {milestones.map((milestone) => (
              <li key={milestone.title}>
                <h2>{milestone.title}</h2>
                <p>{milestone.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-visual">
          <div className="image-frame">
            <Image
              src="/spark.svg"
              alt="Stylized spark illustration"
              width={280}
              height={280}
              priority
            />
          </div>
          <p className="caption">
            An expressive spark, because every greeting can ignite something
            wonderful.
          </p>
        </div>
      </div>
    </section>
  );
}
