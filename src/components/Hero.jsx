import React, { useEffect, useRef, useState } from "react";
import getaimage from "../assets/getaimages.jpg";

export default function Hero() {
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);

  // transform state for mouse tilt and scroll parallax
  const [transform, setTransform] = useState({ tx: 0, ry: 0, rx: 0, s: 1 });

  useEffect(() => {
    // Simple scroll-based parallax using requestAnimationFrame for smoothness
    let raf = null;

    function onScroll() {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      // compute offset relative to viewport center
      const viewportCenter = window.innerHeight / 2;
      const elemCenter = rect.top + rect.height / 2;
      const dist = elemCenter - viewportCenter;
      // small translation: move opposite to scroll to create parallax
      const tx = -(dist * 0.03); // tuned factor for subtle effect

      // schedule update
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setTransform((t) => ({ ...t, tx }));
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // mouse move tilt
  function handleMove(e) {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const ry = (x / rect.width) * 6; // rotateY up to ~6deg
    const rx = -(y / rect.height) * 6; // rotateX up to ~6deg
    setTransform((t) => ({ ...t, rx, ry, s: 1.05 }));
  }

  function handleLeave() {
    // reset tilt and scale
    setTransform((t) => ({ ...t, rx: 0, ry: 0, s: 1 }));
  }

  const style = {
    transform: `translateY(${transform.tx}px) rotateX(${transform.rx}deg) rotateY(${transform.ry}deg) scale(${transform.s})`,
  };

  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4"
    >
      {/*
        Image wrapper explanation:
        - We add subtle parallax (translateY) on scroll and a tilt-scale on mouse move
          to make the hero photo feel interactive. The transform is applied inline
          for smooth GPU-accelerated animations. This is lightweight and degrades
          gracefully on devices without pointer input (touch devices will still see scale on hover).
      */}
      <div
        ref={wrapperRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        // make wrapper same size as image so the border sits tight to the photo
        className="mb-6 rounded-full shadow-2xl w-48 h-48 md:w-56 md:h-56 overflow-hidden"
        style={{ willChange: "transform" }}
      >
        <img
          ref={imgRef}
          src={getaimage}
          alt="Getabalew"
          // apply border on the image itself so there is no visible gap
          className="w-full h-full rounded-full border-4 border-blue-500 object-cover transition-transform duration-300 ease-out block"
          style={style}
        />
      </div>

      <h1 className="text-5xl font-bold">
        Hi, I&apos;m
        <span className="ml-2 bg-[linear-gradient(90deg,#ec4899_0%,#ef4444_50%,#f59e0b_100%)] bg-clip-text text-transparent">
          Getabalew Tekalign
        </span>
        <span className="ml-2" aria-hidden>
          👋
        </span>
      </h1>
      <p className="mt-4 text-xl text-gray-400">
        Frontend Developer | React Enthusiast | Lifelong Learner
      </p>
      {/* Updated personal intro paragraph (user supplied). Kept responsive
          Tailwind classes and readable color on the dark hero background. */}
      <p className="mt-4 text-lg md:text-xl font-thin text-[rgba(255,255,255,0.95)] max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-sm">
        I’m a passionate Full Stack Developer skilled in React, Node.js, and
        PostgreSQL, with a growing love for Django. I enjoy building dynamic,
        scalable, and responsive web applications that deliver great user
        experiences and strong backend performance. I’m always curious to
        learn, solve complex problems, and explore new technologies to keep
        improving as a developer.
      </p>
      {/* Action buttons: Connect + Resume. Placed in the hero so visitors can
          quickly contact or download resume. Using the same multi-stop
          gradient as the navbar for visual consistency. */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#contact"
          aria-label="Connect with me"
          className="inline-flex items-center px-6 py-3 rounded-full text-white text-base font-semibold font-outfit shadow-xl hover:scale-105 transform transition duration-200 bg-[linear-gradient(90deg,#3b82f6_0%,#ec4899_33%,#ef4444_66%,#f59e0b_100%)] cursor-pointer no-underline"
        >
          Connect with me
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download resume"
          className="inline-flex items-center px-6 py-3 rounded-full text-gray-900 bg-white/90 dark:bg-white/10 dark:text-white text-base font-medium shadow hover:scale-105 transform transition duration-200"
        >
          My resume
        </a>
        
        <a
          href="#services"
          aria-label="My services"
          className="inline-flex items-center px-6 py-3 rounded-full text-white text-base font-medium shadow hover:scale-105 transform transition duration-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          My services
        </a>
      </div>
    </section>
  );
}
