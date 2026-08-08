import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform with customizable widgets and JWT authentication.",
    tags: ["React", "Node.js", "JWT"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSize1ShzH_X59AuEARVvCAe7hsl4IF_R-x51bga5tKT7Xl8e-gZtfHhQjbOIS3DsM8gf3kOllihohyuuE_FnSrEOEX6ajWDTVCgvSJwGIrMeH6e9ddRVqPKzP2WZMZwBG2TRBJO1A_LKhixGkEDlVfKf4jiwEJXWFUxXZNy2nliJOM6J7GU-j10-kPQzBgIPa3UeFT2OiHt8nNS3JVSZSCkuwD1FkaMnMnbmHayByn3yctLcdnL92",
    alt: "A sleek, dark-mode dashboard interface showing data visualizations and analytics charts. The aesthetic is highly technical, using deep blacks, stark whites, and neon blue accents, resembling a high-end SaaS product or developer tool. The lighting is clean and crisp.",
    repoUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "E-Commerce Engine",
    description:
      "Headless e-commerce backend with a fully responsive storefront and Stripe integration.",
    tags: ["MongoDB", "Express", "Redux"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVMACUWfFB-Bd50XRJTO7gOCGBc5YijwCwSqLwyQCNPmtpxGtIoK2rXIKFbsqn9wKNNk4O6ndEOP_wyI1w_xrHUa_wPl0Binpx-wTMAC_mHmhqlIYQdp2lRFw9i4Ymfcz5zhZ8EyC1hzzZTxUdoVYKVQLgKU8bCcp7gJoq210d1t7iOuJKp3MB7J_Sr2HLDxtBq8lBLvaaC8SUDxSPLmjeHx5knQcEZAN6DmdwiERmkiiQrW_VY96R",
    alt: "A sophisticated e-commerce checkout flow displayed on a dark background. The UI features minimalist form fields with subtle glowing borders, an order summary section, and a prominent 'Complete Purchase' button. The style is modern, technical, and precise, utilizing shades of dark gray and a vibrant primary accent color.",
    repoUrl: "https://github.com",
    demoUrl: "https://github.com",
  },
  {
    title: "Collab Space",
    description:
      "Real-time collaborative workspace utilizing WebSockets for instant updates across clients.",
    tags: ["Socket.io", "React", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLBp-BfzAmr-FR__OqAsZ_jDr-ybH5vYN_0O3qqpgqAgVUAa85jm9l2RIx-GpF8LccZsfYXwu9GMshAKdhXfXqm6PmunAF8LbHzv_QLgVcT6d_zunK09u5tN5uBWt9vK2ZK1FYIG3jAxAKaiHSGhbU0uTGpqGLXi2yPxpGrxg_s-dECaLqdUe83ky188Bn9oQ262Og91aNga9IIodERmwP8n9oYjKC7We1QrjONIqlwZMyKVyO4ULY",
    alt: "A dark-mode collaborative text editor interface. The screen shows multiple cursors with different colors editing code simultaneously. The overall mood is focused and technical, with a dark slate background and high-contrast typography, characteristic of a professional IDE environment.",
    repoUrl: "https://github.com",
    demoUrl: "https://github.com",
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
