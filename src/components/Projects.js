import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "MediQueue - Tutor Booking System",
    description:
      "A premium, full-stack academic mentorship and session booking platform designed for medical students to explore, book, and manage tutoring sessions with qualified instructors. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4, this application provides a modern, fast, and responsive user experience. Authentication is fully powered by Better Auth with a MongoDB Adapter, supporting both credential-based logins and Google Social Authentication..",
    tags: ["React", "Node.js", "MongoDB", "Better Aught"],
    image:
      "https://i.ibb.co.com/BKYFYWFP/Screenshot-2026-08-08-141256.png",
    alt: "A sleek, dark-mode dashboard interface showing data visualizations and analytics charts. The aesthetic is highly technical, using deep blacks, stark whites, and neon blue accents, resembling a high-end SaaS product or developer tool. The lighting is clean and crisp.",
    repoUrl: "https://github.com/shuvro18/Tutor-Booking-Website",
    demoUrl: "https://tutor-booking-system-zeta.vercel.app",
  },
  {
    title: "SummerCART — Summer Essentials Store",
    description:
      "SummerCART is a modern, responsive, and feature-rich e-commerce web application tailored for summer essentials. Built on top of the latest Next.js framework with React 19, it utilizes Better-Auth for secure authentication (including email/password and Google OAuth), MongoDB for database persistence, and a premium design system powered by Tailwind CSS v4, DaisyUI v5, and HeroUI..",
    tags: ["MongoDB", "Better-Auth", "Next.js", "React Toastify", "HeroUI"],
    image:
      "https://i.ibb.co.com/Z1xkWjRh/Screenshot-2026-08-08-142420.png",
    alt: "A sophisticated e-commerce checkout flow displayed on a dark background. The UI features minimalist form fields with subtle glowing borders, an order summary section, and a prominent 'Complete Purchase' button. The style is modern, technical, and precise, utilizing shades of dark gray and a vibrant primary accent color.",
    repoUrl: "https://github.com/shuvro18/summercart-summer-essentials-store",
    demoUrl: "https://summercart-summer-essentials-store-dusky.vercel.app/",
  },
  {
    title: "KeenKeeper - Keep Your Friendship Alive",
    description:
      "KeenKeeper is a personal relationship management dashboard designed to help you nurture and maintain meaningful connections with your friends. It tracks your interactions and provides visual insights to ensure no important relationship is neglected.",
    tags: ["React Router", "React.js","Recharts", "Tailwind", "DaisyUI"],
    image:
      "https://i.ibb.co.com/Pzs3t4vG/Screenshot-2026-08-08-143255.png",
    alt: "A dark-mode collaborative text editor interface. The screen shows multiple cursors with different colors editing code simultaneously. The overall mood is focused and technical, with a dark slate background and high-contrast typography, characteristic of a professional IDE environment.",
    repoUrl: " https://github.com/shuvro18/-KeenKeeper-Keep-Your-Friendships-Alive-A7",
    demoUrl: "https://keenkeeper-friends-a7.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background"
      id="projects"
    >
      <div className="max-w-max-width mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Projects
          </h2>
          <div className="h-px grow bg-outline-variant"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
