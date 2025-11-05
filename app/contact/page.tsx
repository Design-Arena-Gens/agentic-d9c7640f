import ContactForm from "../../components/ContactForm";
import Moodboard from "../../components/Moodboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Agentic Greeting Hub"
};

export default function ContactPage() {
  return (
    <section className="container content">
      <div className="content-grid">
        <div>
          <span className="tag">Keep the Vibe Going</span>
          <h1>Send Another Hello</h1>
          <p>
            Drop a new greeting, share a story, or pitch a topic and we will add
            it to the ambient moodboard instantly.
          </p>
          <ContactForm />
        </div>
        <div>
          <Moodboard />
        </div>
      </div>
    </section>
  );
}
