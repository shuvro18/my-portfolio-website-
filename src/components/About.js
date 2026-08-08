import Image from "next/image";
import image from "@/app/shuvro.png"

export default function About() {
  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-background"
      id="about"
    >
      <div className="max-w-max-width mx-auto">
        <div className="flex flex-col gap-2 mb-12 md:mb-12">
          <span className="font-label-mono text-label-mono text-primary tracking-widest">
            // WHO I AM
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            About <span className="text-primary italic">Me</span>
          </h2>
          <div className="h-0.5 w-12 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">
          {/* Image Column */}
          <div className="relative group w-full flex justify-center md:block">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative rounded-xl overflow-hidden border border-outline-variant shadow-2xl">
              <Image
              width={400}
              height={200}
                alt="Shuvro - MERN Stack Developer"
                className="  mx-auto hover:grayscale-0 transition-all duration-500"
                src={image}
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-7 -right-4 w-32 h-32 bg-surface-container-high border border-primary/30 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl backdrop-blur-md">
              <span className="font-label-mono text-[13px] text-primary leading-tight">
                MERN Stack
                <br />
                Developer
              </span>
              <span className="material-symbols-outlined text-primary text-sm mt-1">
                spa
              </span>
            </div>
          </div>
          {/* Text Column */}
          <div className="space-y-6 pt-8 md:pt-0">
            <p className="text-on-surface-variant leading-relaxed">
              Hi there! I'm <strong className="text-on-surface">Shuvro Biswas</strong>,
              a full-stack junior <strong className="text-on-surface">MERN developer</strong>
              focused on building fast, scalable, and user-friendly web
              applications from end to end.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              I specialize in building responsive, high-performance user interfaces using
              <strong className="text-on-surface">React, Next.js, and Tailwind CSS.</strong>{" "}
              On the backend, I develop{" "}
              <strong className="text-on-surface">RESTful APIs</strong> with{" "}
              <strong className="text-on-surface">Node.js and Express.js</strong>, backed by{" "}
              <strong className="text-on-surface">MongoDB</strong> as my primary database. I
              integrate <strong className="text-on-surface">BetterAuth and JWT</strong> for
              secure authentication and <strong className="text-on-surface">Stripe</strong>{" "}
              for payment systems.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              I might be new to professional client projects, but I’ve been consistently building and experimenting to master my craft. For me <strong className="text-on-surface">the right time to start is right now,</strong>,
              and every single project gets me one step closer to my ultimate career goals.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              I'm always looking forward to
              <strong className="text-on-surface"> collaborating on meaningful projects</strong> and 
              <strong className="text-on-surface"> leveling up my development skills</strong> If you're searching for a quick learner who is deeply passionate about tech, let's connect
              — let's connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
