import { motion } from "framer-motion";
import {
  Binary,
  Database,
  Cpu,
  Network,
  Wrench,
  Boxes,
  Brain,
  Sparkles,
  Search,
  BarChart3,
} from "lucide-react";
import { FloatingBlob } from "./decor";

const courses = [
  { name: "Data Structures & Algorithms", Icon: Binary },
  { name: "Database Management Systems", Icon: Database },
  { name: "Operating Systems", Icon: Cpu },
  { name: "Computer Networks", Icon: Network },
  { name: "Software Engineering", Icon: Wrench },
  { name: "Object Oriented Programming", Icon: Boxes },
  { name: "Machine Learning", Icon: Brain },
  { name: "Artificial Intelligence", Icon: Sparkles },
  { name: "Data Mining", Icon: Search },
  { name: "Data Visualization", Icon: BarChart3 },
];

export function Coursework() {
  return (
    <section id="coursework" className="relative overflow-hidden py-28">
      <FloatingBlob className="left-[8%] top-10 h-56 w-56 opacity-40" color="var(--blush)" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">
            In the syllabus
          </p>
          <h2 className="mt-4 text-5xl font-black text-ink sm:text-7xl">
            Learning <span className="italic text-berry">highlights</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="group flex items-center gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-black/[0.03]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose/60 text-ink transition-colors group-hover:bg-berry group-hover:text-white">
                <c.Icon className="h-6 w-6" />
              </div>
              <p className="text-base font-semibold text-ink">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
