import { motion } from "framer-motion";
import { FloatingBlob } from "./decor";

const groups: { title: string; items: string[]; tint: string }[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    tint: "bg-petal",
  },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Tailwind"], tint: "bg-rose/70" },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"], tint: "bg-blush" },
  { title: "Database", items: ["MongoDB", "MySQL"], tint: "bg-petal" },
  {
    title: "Analytics",
    items: ["Power BI", "Tableau", "Excel", "Pandas", "NumPy"],
    tint: "bg-rose/70",
  },
  { title: "Machine Learning", items: ["Scikit-learn", "TensorFlow"], tint: "bg-blush" },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Canva"],
    tint: "bg-petal",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <FloatingBlob className="right-[10%] top-8 h-64 w-64 opacity-40" color="var(--rose)" />
      <FloatingBlob
        className="left-[-5%] bottom-8 h-72 w-72 opacity-40"
        color="var(--petal)"
        delay={1.5}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">Toolbox</p>
          <h2 className="mt-4 text-5xl font-black text-ink sm:text-7xl">
            Tech <span className="italic text-berry">Stack</span>.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: gi * 0.05 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-[220px_1fr] sm:items-center"
            >
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">{g.title}</h3>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -4, rotate: -2, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`cursor-default rounded-full ${g.tint} px-5 py-2.5 text-sm font-semibold text-ink shadow-soft`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
