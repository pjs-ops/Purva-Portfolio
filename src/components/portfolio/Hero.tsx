import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Database, Code2, BarChart3, LineChart } from "lucide-react";
import { Sparkle, Flower, Dot, Squiggle, FloatingBlob } from "./decor";
import { ProfileImage } from "./ProfileImage";

const orbitIcons = [
  { Icon: Database, label: "SQL", pos: "top-6 -left-4", color: "bg-white text-berry", delay: 0 },
  { Icon: Code2, label: "Python", pos: "top-24 -right-6", color: "bg-rose text-ink", delay: 0.4 },
  {
    Icon: Code2,
    label: "React",
    pos: "bottom-24 -left-8",
    color: "bg-white text-plum",
    delay: 0.8,
  },
  {
    Icon: BarChart3,
    label: "Power BI",
    pos: "bottom-8 -right-2",
    color: "bg-petal text-ink",
    delay: 1.2,
  },
  {
    Icon: LineChart,
    label: "Tableau",
    pos: "top-1/2 -right-10",
    color: "bg-white text-berry",
    delay: 1.6,
  },
  { Icon: Github, label: "GitHub", pos: "top-1/2 -left-12", color: "bg-ink text-white", delay: 2 },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* background decorative blobs */}
      <FloatingBlob className="left-[-8%] top-[10%] h-72 w-72 opacity-60" color="var(--petal)" />
      <FloatingBlob
        className="right-[-6%] top-[40%] h-96 w-96 opacity-40"
        color="var(--blush)"
        delay={2}
      />
      <Sparkle className="absolute left-[12%] top-24 text-rose animate-floaty" size={22} />
      <Flower className="absolute right-[8%] top-16 text-rose animate-floaty-slow" size={38} />
      <Sparkle className="absolute right-[22%] bottom-24 text-berry/60 animate-floaty" size={16} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          

          <p className="text-lg text-plum/80 sm:text-xl">Hi, I'm</p>
          <h1 className="mt-1 text-5xl leading-[0.95] font-black text-ink sm:text-7xl lg:text-[5.5rem]">
            PURVA <br />
            <span className="relative inline-block">
              JADHAV
              <Squiggle className="absolute -bottom-3 left-0 h-4 w-full text-rose" />
            </span>
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium text-ink sm:text-2xl">
            <span className="rounded-full bg-rose/60 px-4 py-1">Software Developer</span>
            <span className="text-berry">&</span>
            <span className="rounded-full bg-petal px-4 py-1">Data Analyst</span>
          </p>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build scalable software and transform complex data into meaningful business insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white shadow-petal transition-shadow hover:shadow-[0_20px_50px_-15px_oklch(0.3_0.05_340/0.55)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink shadow-soft"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right — organic blob portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* layered blobs behind */}
          <div
            className="absolute inset-6 animate-blob bg-rose/70"
            style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
          />
          <div
            className="absolute inset-0 animate-blob bg-petal"
            style={{ borderRadius: "58% 42% 47% 53% / 43% 58% 42% 57%", animationDelay: "-4s" }}
          />

          {/* portrait mask */}
          <div className="absolute inset-5 overflow-hidden rounded-full border-8 border-white/80 bg-cream shadow-petal animate-floaty-slow">
            <ProfileImage />
          </div>

          {/* orbit icons */}
          {orbitIcons.map(({ Icon, label, pos, color, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} z-10 flex items-center gap-2 rounded-full ${color} px-3 py-2 text-xs font-semibold shadow-float backdrop-blur`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
              whileHover={{ scale: 1.15, rotate: -4 }}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </motion.div>
          ))}

          {/* sparkles around */}
          <Sparkle className="absolute -top-4 right-16 text-berry animate-floaty" size={18} />
          <Sparkle
            className="absolute bottom-2 left-10 text-plum/70 animate-floaty-slow"
            size={14}
          />
          <Flower className="absolute -bottom-4 right-6 text-rose animate-floaty" size={30} />
          <Dot className="absolute top-1/3 -right-2 h-3 w-3 bg-berry/70" />
          <Dot className="absolute top-10 left-1/2 h-2 w-2 bg-plum/50" />
        </motion.div>
      </div>
    </section>
  );
}
