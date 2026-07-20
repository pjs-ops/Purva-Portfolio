import { motion } from "framer-motion";
import { Sparkle, Flower, Squiggle, FloatingBlob } from "./decor";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <FloatingBlob className="left-[70%] top-10 h-64 w-64 opacity-50" color="var(--petal)" />
      <FloatingBlob
        className="left-[-4%] bottom-10 h-56 w-56 opacity-60"
        color="var(--blush)"
        delay={1}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">About me</p>
          <h2 className="mt-4 text-7xl font-black leading-none text-ink sm:text-8xl">
            Hello<span className="text-berry">!</span>
          </h2>
          <Squiggle className="mt-4 h-4 w-40 text-rose" />

          <div className="relative mt-10 hidden lg:block">
            {/* doodles */}
            <Flower className="absolute left-4 top-2 text-rose animate-floaty" size={48} />
            <Sparkle className="absolute left-32 top-24 text-berry animate-floaty-slow" size={22} />
            <svg
              viewBox="0 0 200 200"
              className="ml-8 mt-6 w-56 text-plum/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M20 100 Q 60 20, 100 100 T 180 100" />
              <path d="M40 140 Q 80 90, 130 140" />
              <circle cx="60" cy="60" r="4" fill="currentColor" />
              <circle cx="160" cy="50" r="6" fill="currentColor" />
              <path d="M150 160 l6 -6 M150 154 l6 6" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 text-lg leading-relaxed text-ink/80 sm:text-xl"
        >
          <p className="text-balance">
          I build at the intersection of software engineering and data analytics. Whether I'm developing a full-stack application or uncovering insights from complex datasets, I'm driven by creating technology that is intuitive, scalable, and genuinely useful. I believe the best digital experiences are built with clean engineering, thoughtful design, and a curiosity to keep learning.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["Curious", "Detail-obsessed", "Team player", "Always learning"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-ink shadow-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
