import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", form);
    setSubmitted(true);
    setError("");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black overflow-hidden">
      {/* Full-screen Spline Background */}
     
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 sm:py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl text-center">
          Drop your message below or connect with me on social media.
        </p>

        {submitted ? (
          <p className="text-white text-xl mb-8">
            Thank you for reaching out! I'll get back to you ASAP.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 border border-white rounded-md"
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 rounded bg-black border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 rounded bg-black border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full p-3 rounded bg-black border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-black rounded-md transition duration-200 hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Additional Contact Links */}
        <div className="flex flex-wrap items-center gap-4 my-7">
          <a
            href="mailto:krishnakumars0101@gmail.com"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/krishnakumar-s-474b86257/"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kriskris-27"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;