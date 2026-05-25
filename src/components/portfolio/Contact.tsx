import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Section, SectionHeading } from "./Section";
import emailjs from "@emailjs/browser";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message is too short";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
const onSubmit = async (ev: React.FormEvent) => {
  ev.preventDefault();

  if (!validate()) return;

  try {
    await emailjs.send(
      "service_elzla78",
      "template_5xx7zi6",
      {
        from_name: form.name,
        email: form.email,
        message: form.message,
      },
      "_wv5gPT4EboWz122n"
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSent(false), 4000);

  } catch (error) {
    console.log(error);
    alert("Failed to send message");
  }
};
 

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">build something</span></>}
        description="Have a project in mind, or just want to say hi? Drop me a message — I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.form
          onSubmit={onSubmit}
          noValidate
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl glass p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Name"
              error={errors.name}
              input={
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Jane Doe"
                  maxLength={80}
                />
              }
            />
            <Field
              label="Email"
              error={errors.email}
              input={
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="jane@company.com"
                  type="email"
                  maxLength={120}
                />
              }
            />
          </div>
          <div className="mt-4">
            <Field
              label="Message"
              error={errors.message}
              input={
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Tell me about your project…"
                />
              }
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-hover"
          >
            <Send size={15} /> Send Message
          </button>

          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300"
            >
              Thanks! Your message is on its way. 🚀
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-2xl glass p-6">
            <h3 className="font-display text-lg font-semibold">Contact details</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <Detail icon={Mail} label="m.rajesh07d@gmail.com" href="mailto:m.rajesh07d@gmai.com" />
              <Detail icon={Phone} label="+91 7675846065" href="tel:+91 7675846065" />
              <Detail icon={MapPin} label="vizag, India" />
            </ul>
            <div className="mt-5 flex gap-2">
              {[
                { Icon: Github, href: "https://github.com/Rajesh-ux7", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/rajesh-muppidi-7b070a322", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:m.rajesh07d@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl glass">
            <div className="relative h-56 w-full bg-mesh">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl glass-strong px-4 py-3 text-center">
                  <MapPin className="mx-auto mb-1 text-primary" size={20} />
                  <p className="text-sm font-medium">vizag, India</p>
                  <p className="text-xs text-muted-foreground">Map preview</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {input}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function Detail({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg glass text-primary">
        <Icon size={15} />
      </span>
      <span>{label}</span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="hover:text-primary">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
