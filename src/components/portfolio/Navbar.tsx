import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education-experience", label: "Education & Experience" },
  { id: "skills", label: "Skills" },
  { id: "coursework", label: "Coursework" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div className="glass-pink flex items-center gap-1 rounded-full px-2 py-2 sm:gap-2 sm:px-3">
        <a
          href="#home"
          className="hidden shrink-0 rounded-full bg-ink/90 px-4 py-2 text-sm font-semibold text-white sm:block"
        >
          PJ<span className="text-rose">.</span>
        </a>
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="relative block rounded-full px-3 py-2 text-xs font-medium text-ink/80 transition-colors hover:text-ink sm:px-4 sm:text-sm"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-rose/70"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
