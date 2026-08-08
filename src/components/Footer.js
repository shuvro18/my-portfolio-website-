export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-unit*8 border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto gap-unit*4">
        <div className="font-label-mono text-label-mono text-on-surface opacity-80 hover:opacity-100">
          © 2024 MERN Stack Developer. Built with Precision.
        </div>
        <div className="flex gap-6 font-body-md text-body-md">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="https://github.com/shuvro18"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/shuvro-biswas-nayon/"
          >
            LinkedIn
          </a>
          {/* <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Twitter
          </a> */}
          <a
            className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
            href="#"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
