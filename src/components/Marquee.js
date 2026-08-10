"use client";

import Image from "next/image";

// আপনার দেওয়া স্কিলগুলোর ডেটা একসাথে একটি অ্যারেতে করা হলো
const allSkills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", name: "Express", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  { src: "https://svgl.app/library/better-auth_dark.svg", name: "BetterAuth" },
  { src: "https://jwt.io/img/pic_logo.svg", name: "JWT" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub", invert: true },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code" },
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-8 border-y border-outline-variant bg-surface-container-low relative">
      {/* দুইপাশে ফেড ইফেক্ট দেওয়ার জন্য গ্রেডিয়েন্ট */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

      {/* CSS-driven animation (see .animate-marquee in globals.css) instead of
          a Framer Motion JS tween — keeps it smooth on mobile since it runs
          on the compositor thread, not the main JS thread. */}
      <div className="flex w-max gap-12 whitespace-nowrap items-center animate-marquee hover:[animation-play-state:paused]">
        {/* লুপ স্মুথ রাখার জন্য অ্যারে দুইবার ম্যাপ করা হয়েছে */}
        {[...allSkills, ...allSkills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm shrink-0 hover:border-primary transition-all"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <Image
                src={skill.src}
                alt={skill.name}
                width={24}
                height={24}
                className={`object-contain ${skill.invert ? "dark:brightness-0 dark:invert" : ""}`}
              />
            </div>
            <span className="font-label-mono text-label-mono text-on-surface tracking-wider">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}