export default function Toast({ show }) {
  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transform transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-surface-container-high border border-primary/20 rounded-lg p-4 shadow-2xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-lg">check_circle</span>
        </div>
        <div>
          <h4 className="font-label-mono text-label-mono text-primary uppercase tracking-wider">
            Success
          </h4>
          <p className="text-[13px] text-on-surface-variant">
            Your message has been sent successfully!
          </p>
        </div>
      </div>
    </div>
  );
}
