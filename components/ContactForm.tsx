"use client";

import { useState } from "react";

type Submission = {
  name: string;
  message: string;
};

export default function ContactForm() {
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    window.setTimeout(() => {
      setSubmission(formData);
      setFormData({ name: "", message: "" });
      setIsSending(false);
    }, 600);
  };

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          placeholder="Ada Lovelace"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
        />

        <label htmlFor="message">What would you like to say?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hi again! Let's build something together."
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
        />

        <button type="submit" className="btn primary" disabled={isSending}>
          {isSending ? "Sending…" : "Send Greeting"}
        </button>
      </form>

      {submission && (
        <div className="submission">
          <h2>Latest Greeting</h2>
          <p>
            <strong>{submission.name}</strong> says:
          </p>
          <blockquote>{submission.message}</blockquote>
        </div>
      )}
    </div>
  );
}
