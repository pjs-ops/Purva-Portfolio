import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";
import { FloatingBlob, Sparkle } from "./decor";

export function EducationExperience() {
  return (
    <section id="education-experience" className="relative overflow-hidden py-28">
      <FloatingBlob className="right-[-4%] top-16 h-72 w-72 opacity-40" color="var(--petal)" />
      <FloatingBlob
        className="left-[-6%] bottom-20 h-80 w-80 opacity-40"
        color="var(--rose)"
        delay={2}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header (matches Projects / Skills pattern) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">
            Background
          </p>
          <h2 className="mt-4 text-5xl font-black text-ink sm:text-7xl">
            Education & <span className="italic text-berry">Experience</span>.
          </h2>
          <Sparkle className="mx-auto mt-4 animate-floaty text-rose" size={22} />
        </motion.div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* ─── Education Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 p-6 shadow-petal backdrop-blur-sm sm:p-8"
          >
            {/* Decorative blob behind card */}
            <div
              className="absolute -inset-10 -z-10 animate-blob opacity-40"
              style={{
                background: "var(--petal)",
                borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
              }}
            />

            {/* Icon badge */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-petal shadow-soft">
                <GraduationCap className="h-6 w-6 text-berry" />
              </span>
              <h3 className="text-2xl font-black text-ink sm:text-3xl">Education</h3>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-xl font-bold text-ink sm:text-2xl">MIT ADT University</p>
              <p className="text-base font-semibold text-plum/70 sm:text-lg">
                B.Tech. in Artificial Intelligence &amp; Analytics
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink shadow-soft">
                  CGPA: 8.24 / 10
                </span>
                <span className="rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink shadow-soft">
                  Expected Graduation 2027
                </span>
              </div>
            </div>
          </motion.div>

          {/* ─── Experience Card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 p-6 shadow-petal backdrop-blur-sm sm:p-8"
          >
            {/* Decorative blob behind card */}
            <div
              className="absolute -inset-10 -z-10 animate-blob opacity-40"
              style={{
                background: "var(--blush)",
                borderRadius: "40% 60% 35% 65% / 45% 55% 45% 55%",
                animationDelay: "-4s",
              }}
            />

            {/* Icon badge */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/60 shadow-soft">
                <Briefcase className="h-6 w-6 text-berry" />
              </span>
              <h3 className="text-2xl font-black text-ink sm:text-3xl">Experience</h3>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-xl font-bold text-ink sm:text-2xl">Kodre Hospital</p>
              <p className="text-base font-semibold text-plum/70 sm:text-lg">
                Frontend Developer (Intern)
              </p>
              <span className="inline-block rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink shadow-soft">
                June 2025 – July 2025
              </span>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Worked as a Frontend Developer and built a Hospital Management System website
                — a full-stack platform for managing hospital operations including patient
                records, appointments, and staff/admin workflows on the frontend.
              </p>

              {/* Tech tags (same pill style as Projects) */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["React", "JavaScript", "HTML", "CSS", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink shadow-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Demo button (matches GitHub button styling) */}
              <div className="pt-2">
                <motion.a
                  href="https://hospital-management-system-liart-zeta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-petal"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
