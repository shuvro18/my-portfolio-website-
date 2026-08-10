"use client";

import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Parallax, ScrollDepth } from "./ScrollEffects";

export default function ProjectCard({
  image,
  alt,
  title,
  description,
  tags,
  repoUrl,
  demoUrl,
  index = 0,
}) {
  const depthOffset = 40 + index * 16;
  const scaleFrom = 0.92 - index * 0.02;

  return (
    <ScrollDepth yOffset={depthOffset} scaleFrom={scaleFrom}>
      <div className="w-full bg-surface border border-outline-variant rounded overflow-hidden group hover-card-glow">
        <Parallax speed={28} className="h-68">
          <div
            className="h-72 bg-surface-variant w-full bg-cover bg-center hover-image-invert"
            data-alt={alt}
            style={{ backgroundImage: `url("${image}")` }}
          />
        </Parallax>
        <div className="p-6 space-y-4">
          <h3 className="font-headline-sm text-[24px] font-semibold text-on-surface">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#ffffff05] border border-[#ffffff10] font-label-mono text-label-mono px-2 py-1 rounded text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2 pt-2">
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline text-on-surface font-label-mono text-label-mono py-2 px-4 rounded hover-glow flex-1 text-center flex gap-5 justify-center items-center mx-auto"
            >
              <span>
                <FaExternalLinkAlt />
              </span>
              <span> Repo</span>
            </Link>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 border border-outline text-on-surface font-label-mono text-label-mono py-2 px-4 rounded hover-glow flex-1 text-center justify-center"
            >
              <FaGithub />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </ScrollDepth>
  );
}
