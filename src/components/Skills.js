import SkillItem from "./SkillItem";

const FRONTEND_SKILLS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", name: "HTML5", category: "Foundation" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", name: "CSS3", category: "Styling" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", name: "JavaScript", category: "Core Lang" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", name: "React", category: "UI Library" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", name: "Next.js", category: "Framework", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind", name: "Tailwind", category: "CSS Framework" },
];

const BACKEND_SKILLS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", name: "Node.js", category: "Runtime" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express", name: "Express", category: "Framework", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", name: "MongoDB", category: "Database" },
  { src: "https://svgl.app/library/better-auth_dark.svg", alt: "BetterAuth", name: "BetterAuth", category: "Auth Library" },
  { src: "https://jwt.io/img/pic_logo.svg", alt: "JWT", name: "JWT", category: "Auth Protocol" },
];

const TOOLS_SKILLS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", name: "Figma", category: "UI Design" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", name: "Git / GitHub", category: "Versioning", invert: true },
  { src: "https://cdn.simpleicons.org/netlify", alt: "Netlify", name: "Netlify", category: "Hosting" },
  { src: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", alt: "Vercel", name: "Vercel", category: "Deployment", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code", name: "VS Code", category: "Dev Tools" },
];

function SkillCard({ title, items }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-2">
        <span className="h-px w-3 bg-primary"></span>
        <h3 className="font-label-mono text-label-mono text-primary tracking-widest uppercase">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <SkillItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background border-b border-outline-variant"
      id="skills"
    >
      <div className="max-w-max-width mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-xl text-headline-xl text-primary italic tracking-tighter mb-2">
            Tools &amp; <span className="text-on-background">Skills</span>
          </h2>
          <div className="h-1 w-12 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <SkillCard title="Frontend" items={FRONTEND_SKILLS} />
          <SkillCard title="Backend" items={BACKEND_SKILLS} />
          <SkillCard title="Design & Tools" items={TOOLS_SKILLS} />
        </div>
      </div>
    </section>
  );
}
