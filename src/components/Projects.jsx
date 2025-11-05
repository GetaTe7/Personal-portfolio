import React from "react";
import getaImage from "../assets/getaimages.jpg";
import tictactoeImg from "../assets/tictactoe-image.png";

export default function Projects() {
  const githubProfile = "https://github.com/GetaTe7";

  const projects = [
    {
      title: "E-commerce Website",
      desc: "A modern e-commerce platform demonstrating product listings, cart workflows and checkout integrations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      repo: `${githubProfile}`,
    },
    {
      title: "TicTacToe Game",
      desc: "A small interactive React game showcasing game state management and responsive controls.",
      img: tictactoeImg,
      repo: `${githubProfile}`,
    },
    {
      title: "Portfolio Website",
      desc: "This personal portfolio (the site you are viewing) built with Vite, React and Tailwind CSS.",
      img: getaImage,
      repo: `${githubProfile}`,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white px-6">
      {/* --- Section Title --- */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My Projects
        </h2>
      </div>

      {/* --- Projects Grid --- */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-black rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {/* --- Image Section --- */}
            {proj.title === "Portfolio Website" ? (
              // Slightly minimized image section for portfolio
              <div className="relative h-44 md:h-52 w-full overflow-hidden rounded-md">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="object-cover w-full h-full object-top"
                />
              </div>
            ) : (
              // For Amazon and TicTacToe
              <div className="flex items-center justify-center h-48 md:h-56 w-full bg-white/5 p-4">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="object-contain h-full w-auto max-h-40 md:max-h-52 object-center"
                />
              </div>
            )}

            {/* --- Text Section --- */}
            <div className="p-6 bg-gray-900">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-4">{proj.desc}</p>

              <div className="flex items-center gap-3">
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-md font-medium shadow hover:opacity-90 transition"
                  aria-label={`Open ${proj.title} on GitHub`}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.49-3.88-1.49-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.67.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
