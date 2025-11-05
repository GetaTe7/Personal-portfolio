import React from "react";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, accessible, and high-performance UIs using modern frameworks like React and Tailwind CSS. I focus on component-driven architecture and smooth user interactions.",
  },
  {
    title: "Back-end Development",
    desc: "Designing and implementing server-side logic with Node.js and Express to power scalable applications, including RESTful APIs and server-side rendering where needed.",
  },
  {
    title: "Database Management",
    desc: "Schema design, optimization, and maintenance for relational and NoSQL databases (PostgreSQL, MongoDB). I ensure data integrity, indexing, and reliable backups.",
  },
  {
    title: "API Development & Integration",
    desc: "Creating robust, secure APIs and integrating third-party services. I deliver well-documented endpoints with versioning, rate-limiting, and authentication.",
  },
  {
    title: "Deployment & DevOps",
    desc: "Automating build and deploy pipelines, containerization with Docker, and hosting on modern platforms to enable continuous delivery and reliable operations.",
  },
  {
    title: "Version Control & Collaboration",
    desc: "Establishing Git workflows, PR reviews, and branching strategies to streamline team collaboration and maintain a healthy codebase.",
  },
  {
    title: "Performance Optimization",
    desc: "Profiling and optimizing frontend and backend performance to reduce load times and improve runtime efficiency across devices and networks.",
  },
  {
    title: "Security Implementation",
    desc: "Applying best practices for authentication, authorization, input validation, and secure data handling to reduce vulnerabilities and protect user data.",
  },
  {
    title: "Technical Consulting & Strategy",
    desc: "Advising on architecture, technology choices, and project roadmaps to align engineering efforts with business goals and deliver sustainable value.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-[linear-gradient(90deg,#ef4444_0%,#f59e0b_50%,#3b82f6_100%)] bg-clip-text text-transparent">
            My Services
          </span>
        </h2>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          I offer a range of services to help build, scale, and secure web
          applications. Below are core areas where I can help — click "Read
          more" to get in touch and discuss your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-white/5 p-6 rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10 border border-white"
            >
              <h3 className="text-xl font-semibold mb-2 bg-[linear-gradient(90deg,#ef4444_0%,#f59e0b_50%,#3b82f6_100%)] bg-clip-text text-transparent">
                {s.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm text-blue-400 group-hover:text-white transition"
                aria-label={`Read more about ${s.title}`}
              >
                Read more
                <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
