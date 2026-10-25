import ProjectCard from "./ProjectCard";
import { Parallax, ScrollDepth } from "./ScrollEffects";

const PROJECTS = [
  {
    title: "Nestora - Property Rental & Booking Platform",
    description:
      "Nestora is a modern, high-performance, full-stack property rental and booking web platform built with the Next.js App Router, React 19, and Tailwind CSS v4. It bridges the gap between property owners, prospective tenants, and administrators by providing seamless property discovery, automated reservation workflows, secure Stripe checkout, and role-tailored dashboards.",
    tags: [
      "NEXT.JS",
      "React.js",
      "TAILWIND CSS",
      "BETTER AUTH",
      "MONGODB",
      "STRIPE",
    ],
    image:
      "https://i.ibb.co.com/gF4qc75s/property-rental-and-booking-platfor-ivory-vercel-app.png",
    alt: "Property Rent Website",
    repoUrl:
      " https://github.com/shuvro18/property-rental-and-booking-platform-client",
    demoUrl: "https://property-rental-and-booking-platfor-ivory.vercel.app/",
  },
  {
    title: "MediQueue - Tutor Booking System",
    description:
      "A premium, full-stack academic mentorship and session booking platform designed for medical students to explore, book, and manage tutoring sessions with qualified instructors. Built with Next.js 16 (App Router), React 19, and Tailwind CSS v4, this application provides a modern, fast, and responsive user experience. Authentication is fully powered by Better Auth with a MongoDB Adapter, supporting both credential-based logins and Google Social Authentication..",
    tags: ["React", "Node.js", "MongoDB", "Better Aught"],
    image: "https://i.ibb.co.com/S4bBbchL/image.png",
    alt: "A sleek, dark-mode dashboard interface showing data visualizations and analytics charts. The aesthetic is highly technical, using deep blacks, stark whites, and neon blue accents, resembling a high-end SaaS product or developer tool. The lighting is clean and crisp.",
    repoUrl: "https://github.com/shuvro18/Tutor-Booking-Website",
    demoUrl: "https://tutor-booking-system-zeta.vercel.app",
  },
  {
    title: "SummerCART — Summer Essentials Store",
    description:
      "SummerCART is a modern, responsive, and feature-rich e-commerce web application tailored for summer essentials. Built on top of the latest Next.js framework with React 19, it utilizes Better-Auth for secure authentication (including email/password and Google OAuth), MongoDB for database persistence, and a premium design system powered by Tailwind CSS v4, DaisyUI v5, and HeroUI..",
    tags: ["MongoDB", "Better-Auth", "Next.js", "React Toastify", "HeroUI"],
    image: "https://i.ibb.co.com/Z1xkWjRh/Screenshot-2026-08-08-142420.png",
    alt: "A sophisticated e-commerce checkout flow displayed on a dark background. The UI features minimalist form fields with subtle glowing borders, an order summary section, and a prominent 'Complete Purchase' button. The style is modern, technical, and precise, utilizing shades of dark gray and a vibrant primary accent color.",
    repoUrl: "https://github.com/shuvro18/summercart-summer-essentials-store",
    demoUrl: "https://summercart-summer-essentials-store-dusky.vercel.app/",
  },
  ,
];

export default function Projects() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden"
      id="projects"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        aria-hidden
      >
        <Parallax speed={50} className="h-[130%] top-[-15%]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 80% 40%, #34d399 0%, transparent 50%)",
            }}
          />
        </Parallax>
      </div>

      <div className="max-w-max-width mx-auto space-y-12 relative z-10">
        <ScrollDepth yOffset={36} scaleFrom={0.96}>
          <div className="flex items-center gap-4">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Projects
            </h2>
            <div className="h-px grow bg-outline-variant"></div>
          </div>
        </ScrollDepth>
        <div className="grid md:grid-cols-3 gap-gutter">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
