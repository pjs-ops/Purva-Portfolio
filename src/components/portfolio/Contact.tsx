import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, FileText } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FloatingBlob, Sparkle, Flower } from "./decor";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: "jadhavpurva921@gmail.com",
    href: "mailto:jadhavpurva921@gmail.com",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/purva-jadhav-350336307",
    href: "https://linkedin.com/in/purva-jadhav-350336307",
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/pjs-ops",
    href: "https://github.com/pjs-ops",
    external: true,
  },
  { Icon: MapPin, label: "Location", value: "Pune, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!form.current) return;
  
    setLoading(true);
  
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      setSent(true);
      form.current.reset();
  
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  
    setLoading(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <FloatingBlob className="right-[-6%] top-10 h-80 w-80 opacity-50" color="var(--petal)" />
      <FloatingBlob
        className="left-[-4%] bottom-10 h-72 w-72 opacity-40"
        color="var(--blush)"
        delay={2}
      />
      <Sparkle className="absolute right-[15%] top-16 text-rose animate-floaty" size={20} />
      <Flower className="absolute left-[10%] bottom-20 text-rose animate-floaty-slow" size={36} />

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] bg-white p-8 shadow-petal ring-1 ring-black/5 sm:p-14"
        >
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-rose/40 blur-2xl"
            aria-hidden
          />
          <div
            className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-petal/60 blur-2xl"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-berry">Say hi</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Let's build <br />
                something <span className="italic text-berry">together</span>!
              </h2>
              <p className="mt-5 text-muted-foreground">
                Have a project in mind, an internship opportunity, or just want to chat about data
                over coffee? My inbox is open.
              </p>

              <ul className="mt-8 space-y-3">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <ContactItem contact={c} />
                  </li>
                ))}
              </ul>
              <motion.a
                href="/Purva_Jadhav_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-petal"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </motion.a>
            </div>

            <form
              
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-plum/80">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your idea…"
                  className="w-full resize-none rounded-3xl border border-rose/40 bg-cream/60 px-5 py-4 text-sm text-ink placeholder:text-plum/40 outline-none transition focus:border-berry focus:bg-white"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white shadow-petal sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {sent ? "Sent — thank you!" : "Send message"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-sm text-plum/70">
          Handcrafted with care by Purva Jadhav · © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

function ContactItem({ contact }: { contact: (typeof contacts)[number] }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-berry shadow-soft">
        <contact.Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-plum/70">
          {contact.label}
        </span>
        <span className="block break-words text-sm font-semibold text-ink">{contact.value}</span>
      </span>
    </>
  );
  const classes =
    "group flex items-center gap-4 rounded-2xl bg-cream/70 p-3 transition-all hover:scale-[1.02] hover:bg-rose/40 hover:shadow-[0_10px_28px_-14px_oklch(0.64_0.13_15/0.8)]";
  return contact.href ? (
    <a
      href={contact.href}
      target={contact.external ? "_blank" : undefined}
      rel={contact.external ? "noreferrer" : undefined}
      className={`${classes} cursor-pointer`}
    >
      {content}
    </a>
  ) : (
    <div className={classes}>{content}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-plum/80"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-full border border-rose/40 bg-cream/60 px-5 py-3.5 text-sm text-ink placeholder:text-plum/40 outline-none transition focus:border-berry focus:bg-white"
      />
    </div>
  );
}
