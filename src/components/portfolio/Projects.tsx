import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { FloatingBlob, Sparkle } from "./decor";
import { ProjectGallery } from "./ProjectGallery";

type Project = {
  name: string;
  tagline: string;
  description: string;
  images: string[];
  tags: string[];
  links: { label: string; href: string; icon: "github" | "external" }[];
  accent: string;
};

const github = "https://github.com/pjs-ops";
const projects: Project[] = [
  {
    name: "UNCLUTTERED",
    tagline: "A mindful task companion",
    description:
      "A full-stack workplace productivity platform that combines task management, performance appraisals, and team collaboration in one seamless experience. With secure authentication, Kanban workflows, real-time updates, and an intuitive interface, it helps teams stay organized, track progress, and evaluate performance efficiently.",
    images: [
      "/images/projects/Uncluttered/1.png",
      "/images/projects/Uncluttered/2.png",
      "/images/projects/Uncluttered/3.png",
      "/images/projects/Uncluttered/4.png",
      "/images/projects/Uncluttered/5.png",
      "/images/projects/Uncluttered/6.png",
      "/images/projects/Uncluttered/7.png",
      "/images/projects/Uncluttered/8.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "JWT"],
    links: [{ label: "GitHub", href: github, icon: "github" }],
    accent: "var(--petal)",
  },
  {
    name: "HotelEase",
    tagline: "Hotel booking, reimagined",
    description:
      "A full-stack hotel management platform that streamlines reservations, room management, staff operations, and guest services. Featuring role-based access, responsive dashboards, and efficient booking workflows, it simplifies daily hotel operations through a modern and scalable web application..",
    images: [
      "/images/projects/HotelEase/1H.png",
      "/images/projects/HotelEase/2H.png",
      "/images/projects/HotelEase/3H.png",
      "/images/projects/HotelEase/4H.png",
      "/images/projects/HotelEase/5H.png",
      "/images/projects/HotelEase/6H.png",
      "/images/projects/HotelEase/7H.png",
      "/images/projects/HotelEase/8H.png",
      "/images/projects/HotelEase/9H.png",
      "/images/projects/HotelEase/10H.png",
    ],
    tags: ["React", "Express.js", "MongoDB", "REST APIs", "Tailwind"],
    links: [{ label: "GitHub", href: github, icon: "github" }],
    accent: "var(--blush)",
  },
  {
    name: "Coffee Sales Dashboard",
    tagline: "Insights, brewed daily",
    description:
      "An interactive Tableau dashboard analyzing coffee sales across product categories, store locations, hourly trends, and customer purchasing patterns. KPIs cover total sales, transactions, treemap breakdowns, and trend analysis.",
    images: ["/images/projects/Coffee-Dashboard.png"],
    tags: ["Tableau", "SQL", "Excel", "Data Visualization", "Analytics", "Business Intelligence"],
    links: [
      { label: "GitHub", href: github, icon: "github" },
    ],
    accent: "var(--rose)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <FloatingBlob className="right-[-6%] top-20 h-72 w-72 opacity-40" color="var(--petal)" />
      <FloatingBlob
        className="left-[-4%] top-[60%] h-80 w-80 opacity-40"
        color="var(--blush)"
        delay={2}
      />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">
            Selected work
          </p>
          <h2 className="mt-4 text-5xl font-black text-ink sm:text-7xl">
            Featured <span className="italic text-berry">projects</span>.
          </h2>
          <Sparkle className="mx-auto mt-4 animate-floaty text-rose" size={22} />
        </motion.div>
        <div className="space-y-16 sm:space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-[68.75rem] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 p-4 shadow-petal backdrop-blur-sm sm:p-6 lg:p-8"
    >
      <div className="relative">
        <div
          className="absolute -inset-10 -z-10 animate-blob opacity-50"
          style={{
            background: project.accent,
            borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
            animationDelay: `${index * -3}s`,
          }}
        />
        <ProjectBrowser images={project.images} projectName={project.name} />
        <div className="mx-auto max-w-3xl px-2 pb-3 pt-10 text-center sm:px-6 sm:pt-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-berry">0{index + 1}</p>
          <h3 className="mt-3 text-4xl font-black text-ink sm:text-5xl">{project.name}</h3>
          <p className="mt-3 text-base font-semibold text-plum/70 sm:text-lg">{project.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/10 bg-white/80 px-4 py-1.5 text-xs font-semibold text-ink shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.links.map((link) => (
              <ProjectLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectBrowser({ images, projectName }: { images: string[]; projectName: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="mx-auto w-full max-w-[62rem]"
    >
      <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-petal ring-1 ring-black/5 sm:p-4">
        <div className="mb-3 flex items-center gap-1.5 px-2">
          <span className="h-3 w-3 rounded-full bg-rose" />
          <span className="h-3 w-3 rounded-full bg-petal" />
          <span className="h-3 w-3 rounded-full bg-blush" />
        </div>
        <div className="overflow-hidden rounded-[1.4rem]">
          <ProjectGallery images={images} projectName={projectName} />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLink({ link }: { link: Project["links"][number] }) {
  const isGithub = link.icon === "github";
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={
        isGithub
          ? "inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-soft"
          : "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-petal"
      }
    >
      {isGithub ? <Github className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
      {link.label}
    </motion.a>
  );
}
