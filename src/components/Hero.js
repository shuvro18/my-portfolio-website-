export default function Hero() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-margin-mobile md:px-margin-desktop"
      id="home"
    >
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #0f3e27 0%, transparent 70%)",
        }}
      ></div>
      <div className="max-w-max-width w-full z-10 grid md:grid-cols-2 gap-gutter items-center">
        <div className="space-y-6">
          <h1 className="font-headline-xl text-headline-xl text-primary">
            Full Stack Precision.
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Crafting scalable web applications with the MERN stack.
            Engineered for performance, designed for clarity.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="bg-primary text-background font-label-mono text-label-mono py-3 px-6 rounded hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/shuvro18"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline text-on-surface font-label-mono text-label-mono py-3 px-6 rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center"
            >
              View GitHub
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-surface rounded border border-outline-variant p-4 shadow-lg">
            <div className="flex gap-2 mb-4 border-b border-outline-variant pb-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <pre className="font-label-mono text-label-mono text-on-surface-variant overflow-x-auto leading-relaxed">
              <code className="language-javascript">
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
                {"\n"}    name: <span className="text-green-400">"Shuvro Biswas"</span>,
                {"\n"}    role: <span className="text-green-400">"MERN Stack Developer"</span>,
                {"\n"}    skills: [<span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"Express"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>],
                {"\n"}    focus: <span className="text-green-400">"Scalable Architecture"</span>,
                {"\n"}    hireable: <span className="text-yellow-400">true</span>,
                {"\n"}    <span className="text-purple-400">connect</span>: <span className="text-pink-400">function</span>() {"{"}
                {"\n"}        <span className="text-pink-400">return</span> <span className="text-green-400">"Let's build something great."</span>;
                {"\n"}    {"}"}
                {"\n"}{"}"};
                {"\n"}
                {"\n"}<span className="text-blue-400">developer</span>.<span className="text-purple-400">connect</span>();
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
