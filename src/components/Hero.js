import Marquee from "./Marquee";
import { ParallaxLayer, ScrollDepth } from "./ScrollEffects";

export default function Hero() {
  return (
    <div>
      <section
        className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-margin-mobile md:px-margin-desktop"
        id="home"
      >
        <ParallaxLayer
          className="opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #0f3e27 0%, transparent 70%)",
          }}
          speed={0.4}
        />
        <div className="max-w-max-width w-full z-10 grid md:grid-cols-2 gap-gutter items-center">
          <ScrollDepth yOffset={56} scaleFrom={0.9} className="space-y-6">
            <h1 className="font-headline-xl text-headline-xl text-primary">
              Full Stack Precision.
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Crafting scalable web applications with the MERN stack. Engineered
              for performance, designed for clarity.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="bg-primary text-background font-label-mono text-label-mono py-3 px-6 rounded hover-glow flex items-center justify-center"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/shuvro18"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline text-on-surface font-label-mono text-label-mono py-3 px-6 rounded hover-glow flex items-center justify-center"
              >
                View GitHub
              </a>
            </div>
            <p className=" font-headline-xl text-headline-xl text-primary">
              I have done <span className="text-7xl ">10+</span> projects
            </p>
          </ScrollDepth>
          <ScrollDepth
            yOffset={72}
            scaleFrom={0.88}
            className="hidden md:block"
          >
            <div className="bg-surface rounded border border-outline-variant p-4 shadow-lg hover-card-glow">
              <div className="flex gap-2 mb-4 border-b border-outline-variant pb-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <pre className="font-label-mono text-label-mono text-on-surface-variant overflow-x-auto leading-relaxed">
                <code className="language-javascript">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                  {"\n"} name:{" "}
                  <span className="text-green-400">"Shuvro Biswas"</span>,{"\n"}{" "}
                  role:{" "}
                  <span className="text-green-400">"MERN Stack Developer"</span>
                  ,{"\n"} Frontend: [
                  <span className="text-green-400">"JavaScript"</span>,{" "}
                  <span className="text-green-400">"React.js"</span>,{" "}
                  <span className="text-green-400">"Next.js"</span>,{" "}
                  <span className="text-green-400">"HTML5"</span>,{" "}
                  <span className="text-green-400">"CSS3"</span>,{" "}
                  <span className="text-green-400">"Tailwind Css"</span>],
                  {"\n"} backend: [
                  <span className="text-green-400">
                    "Node.js, Express.js, REST APIs, BetterAuth, JWT"
                  </span>
                  ],
                  {"\n"} database: [
                  <span className="text-green-400">"MongoDB Atlas"</span>],
                  {"\n"} projects:{" "}
                  <span className="text-yellow-400 font-bold text-[15px]">
                    "10+ projects"
                  </span>
                  ,{"\n"} focus:{" "}
                  <span className="text-green-400">
                    "Scalable Architecture"
                  </span>
                  ,{"\n"} hireable:{" "}
                  <span className="text-yellow-400">true</span>,{"\n"}{" "}
                  <span className="text-purple-400">connect</span>:{" "}
                  <span className="text-pink-400">function</span>() {"{"}
                  {"\n"} <span className="text-pink-400">return</span>{" "}
                  <span className="text-green-400">
                    "Let's build something great."
                  </span>
                  ;{"\n"} {"}"}
                  {"\n"}
                  {"}"};{"\n"}
                  {"\n"}
                  <span className="text-blue-400">developer</span>.
                  <span className="text-purple-400">connect</span>();
                </code>
              </pre>
            </div>
          </ScrollDepth>
        </div>
      </section>

      <Marquee />
    </div>
  );
}
