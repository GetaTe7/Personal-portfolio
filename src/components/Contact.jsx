import React, { useState } from "react";

export default function Contact() {
  const phone = "+251910754214";
  const email = "getabalewtekalign7@gmail.com";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Message from ${name || "Website Visitor"}`
    );
    const body = encodeURIComponent(message || "");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Interested in working together or just want to say hi? Reach out via
          phone, email, or one of my social links below.
        </p>

        {/* Contact info buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
            aria-label="Call phone"
          >
            {/* Clear phone icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.73 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.73.7A2 2 0 0122 16.92z" />
            </svg>
            {phone}
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
            aria-label="Send email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 11 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
            </svg>
            {email}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {/* GitHub */}
          <a
            href="https://github.com/GetaTe7"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.09-.73.09-.73 1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/getaa29"
            title="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.36 2H21l-6.56 7.49L22 22h-4.93l-3.83-5.64L9 22H2l7.05-8.05L2 2h5.09l3.46 5.2L18.36 2zm-2.04 17.3h1.16L8.9 4.59H7.67l8.65 14.71z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm0 7.5A3 3 0 1115 12a3 3 0 01-3 3zm4.75-7.88a1.13 1.13 0 11-1.13-1.12 1.12 1.12 0 011.13 1.12z" />
            </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/geta_29"
            title="Telegram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm5.634 7.522l-1.79 8.468c-.136.632-.49.789-1.001.492l-2.773-2.043-1.337 1.286c-.148.148-.272.272-.557.272l.2-2.836 5.163-4.658c.225-.2-.05-.312-.346-.112l-6.389 4.014-2.75-.86c-.596-.186-.607-.596.125-.882l10.75-4.146c.497-.19.93.112.767.844z" />
            </svg>
          </a>
        </div>

        {/* Contact form */}
        <form onSubmit={sendEmail} className="bg-gray-700 p-6 rounded-lg">
          <label className="block text-left text-sm text-gray-200 mb-2">
            Your name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md bg-gray-800 text-white"
            placeholder="Your name"
            required
          />

          <label className="block text-left text-sm text-gray-200 mb-2">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-4 px-3 py-2 rounded-md bg-gray-800 text-white"
            rows={4}
            placeholder="Write your message here"
            required
          />

          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
          >
            Send via Email
          </button>
        </form>
      </div>
    </section>
  );
}
