import { motion } from "framer-motion";
import { FloatingBlob, Sparkle } from "./decor";
import sihWinnerImg from "@/assets/sih-2026-winner.jpg";

const contributions = [
  "Research",
  "Solution Design",
  "Presentation / PPT",
  "Product & Feature Ideation",
  "Project Development Collaboration",
];

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-28">
      <FloatingBlob className="left-[-5%] top-20 h-72 w-72 opacity-40" color="var(--petal)" />
      <FloatingBlob
        className="right-[-5%] bottom-20 h-80 w-80 opacity-40"
        color="var(--rose)"
        delay={2}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">
            Recognition
          </p>
          <h2 className="mt-4 text-5xl font-black text-ink sm:text-7xl">
            Key <span className="italic text-berry">Achievements</span>.
          </h2>
          <Sparkle className="mx-auto mt-4 animate-floaty text-rose" size={22} />
        </motion.div>

        {/* Featured Achievement Card */}
        <motion.article
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-[68.75rem] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 p-6 shadow-petal backdrop-blur-sm sm:p-8 lg:p-10"
        >
          {/* Decorative blob behind card */}
          <div
            className="absolute -inset-10 -z-10 animate-blob opacity-40"
            style={{
              background: "var(--blush)",
              borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            }}
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* LEFT: Large SIH winner ceremony photograph */}
            <div className="lg:col-span-7">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-petal ring-1 ring-black/5 sm:p-4"
              >
                <div className="mb-3 flex items-center gap-1.5 px-2">
                  <span className="h-3 w-3 rounded-full bg-rose" />
                  <span className="h-3 w-3 rounded-full bg-petal" />
                  <span className="h-3 w-3 rounded-full bg-blush" />
                </div>
                <div className="overflow-hidden rounded-[1.4rem]">
                  <img
                    src={sihWinnerImg}
                    alt="Internal Smart India Hackathon 2026 Winner Ceremony at MIT-ADT University"
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Content */}
            <div className="flex flex-col justify-center lg:col-span-5">
              {/* Winner Badge */}
              <div className="flex items-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-rose/60 bg-rose/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-berry shadow-soft">
                  <span aria-hidden="true">🏆</span>
                  <span>WINNER</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-3xl font-black text-ink sm:text-4xl">
                Smart India Hackathon <span className="text-berry">2026</span>
              </h3>

              {/* Internal round context */}
              <p className="mt-1.5 text-sm font-semibold text-plum/80 sm:text-base">
                Internal Hackathon — MIT Art, Design &amp; Technology University, Pune
              </p>

              {/* Project Name */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-plum/70">
                  Project:
                </span>
                <span className="text-xl font-extrabold text-ink sm:text-2xl">VidyaDhara</span>
              </div>

              {/* Short description */}
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Won the internal Smart India Hackathon 2026 round at MIT-ADT University with
                VidyaDhara, an AI-enabled learning platform focused on competency gap analysis,
                personalized learning, and intelligent assessment generation.
              </p>

              {/* My contribution */}
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-berry">
                  My contribution
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {contributions.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-soft"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-berry" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
