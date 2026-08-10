export default function SkillItem({ src, alt, name, category, invert }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col items-center justify-center text-center group hover-card-glow cursor-default">
      <img
        src={src}
        className={`w-12 h-12 mb-3${invert ? " invert" : ""}`}
        alt={alt}
      />
      <span className="font-label-mono text-[12px] text-on-surface">{name}</span>
      <span className="text-[10px] text-on-surface-variant opacity-60">
        {category}
      </span>
    </div>
  );
}
