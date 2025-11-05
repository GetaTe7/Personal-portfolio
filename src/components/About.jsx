import React, { useState } from "react";
import getaImage from "../assets/getaimages.jpg";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  // Toggle expansion: when expanded on md+ the portrait grows in width and
  // shifts to the right to reduce/remove the gap to the page edge.
  // We keep this local to About so it doesn't affect other components.
  function toggleExpand() {
    setExpanded((s) => !s);
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400 text-center">
          About Me
        </h2>

        {/*
          Layout explanation:
          - Use a responsive grid: on small screens items stack, on md+ screens we
            create 4 columns where the text spans 2 columns so it has room and
            two image columns flank it. This lets the second photo be tall
            (height-based) without forcing the width to grow too large.
          - The second (tall) photo uses a viewport-based height (md:h-[75vh])
            so it occupies ~75% of the section height on larger screens which matches your request to
            enlarge the second photo by height rather than width.
          - understanding: this works for this reason — applying a viewport-based
            height (vh) ties the image height to the visible area, so the image
            grows in height without stretching the layout horizontally.
        */}

  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {/* Small circular avatar - single photo like Home
              understanding: we remove the second/tall photo and use one
              responsive avatar. On md+ screens the avatar gets wider to
              provide more horizontal presence without changing the section height.
          */}
          <div className={"flex items-center justify-center md:justify-start " + (expanded ? "md:col-span-2" : "md:col-span-1")}>
            {/*
              Rectangle portrait (md+):
              - Use a tall viewport-based height on md+ so the image occupies ~75% of the visible
                area (md:h-[75vh]) which satisfies the request to increase height rather than width.
              - Keep the width constrained (md:w-64) so text remains readable and the layout doesn't
                become overly wide.
              - Remove rounded-full to produce a portrait (rounded-lg for a subtle corner radius).
              - object-cover keeps the image aspect correct while filling the container.
              understanding: tying height to the viewport (vh) grows the portrait vertically
              without stretching other layout elements horizontally.
            */}
            <div
              role="button"
              tabIndex={0}
              onClick={toggleExpand}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleExpand()}
              title={expanded ? "Click to shrink photo" : "Click to expand photo to the right"}
              className={
                "w-56 h-80 rounded-lg overflow-hidden border-0 shadow-2xl transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 " +
                (expanded
                  ? "md:w-[60vw] md:h-[80vh] md:mr-0 md:ml-auto"
                  : "md:w-64 md:h-[75vh] md:-mr-6")
              }
            >
              <img
                src={getaImage}
                alt="Getabalew Tekalign"
                className="block"
                style={{
                  width: "320px",
                  height: "480.188px",
                  maxWidth: "100%",
                  objectFit: "cover",
                  overflow: "clip",
                  overflowX: "clip",
                  overflowY: "clip",
                  borderRadius: "8px",
                  boxShadow:
                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                  boxSizing: "border-box",
                  color: "rgb(255,255,255)",
                  display: "block",
                  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
          </div>

          {/* Main text — spans two columns on md. Replaced per user content. */}
          <div className={"text-left " + (expanded ? "md:col-span-1" : "md:col-span-2")}>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I am a passionate full stack developer with a focus on creating
              dynamic and responsive web applications. My expertise lies in
              both front-end and back-end development, allowing me to build
              comprehensive solutions that deliver exceptional user
              experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              I am proficient in a variety of programming languages and
              frameworks, including React, Node.js, and PostgreSQL. I thrive
              on challenges and am always eager to learn new technologies to
              enhance my skills.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I believe in the power of collaboration and enjoy working in
              teams to bring innovative ideas to life. My goal is to
              contribute to projects that make a positive impact and to
              continuously grow as a developer.
            </p>

            {/* Skills status bars (no numeric values) */}
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">HTML &amp; CSS</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 transition-all duration-500" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">JavaScript</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 transition-all duration-500" style={{ width: '80%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">React</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-500" style={{ width: '82%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Next.js</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 transition-all duration-500" style={{ width: '70%' }} />
                </div>
              </div>
            </div>

            {/* Quick stats: years, projects, happy clients. Styled for contrast and
                responsiveness. */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-blue-400">3</h3>
                <p className="mt-1 text-sm text-gray-300">Years Experience</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-blue-400">15+</h3>
                <p className="mt-1 text-sm text-gray-300">Projects Completed</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-blue-400">20+</h3>
                <p className="mt-1 text-sm text-gray-300">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* removed second tall portrait per request - single photo now matches home */}
        </div>
      </div>
    </section>
  );
}
