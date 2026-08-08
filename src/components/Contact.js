"use client";

import { useState, useEffect } from "react";
import Toast from "./Toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormData({ name: "", email: "", message: "" });
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <section
        className="py-24 px-margin-mobile md:px-margin-desktop bg-linear-to-b from-background to-surface-container-high border-t border-outline-variant"
        id="contact"
      >
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-label-mono text-label-mono text-primary tracking-widest uppercase">
                  {" "}
                  // CONTACT.INIT()
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                  Ready to build{" "}
                  <span className="text-primary italic">together?</span>
                </h2>
                <div className="h-1 w-12 bg-primary"></div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
                Looking for a technical partner to architect and deliver
                scalable web applications? Let's discuss your next project and
                turn your vision into high-performance code.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">
                    mail
                  </span>
                  <span className="font-label-mono text-label-mono">
                    shuvro@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <span className="font-label-mono text-label-mono">
                    Bangladesh / Remote
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={"https://www.linkedin.com/in/shuvro-biswas-nayon"} className="flex gap-2 items-center cursor-pointer px-4 py-2 bg-surface-container-low rounded-sm border border-outline hover:border-primary hover:text-primary">
                    <FaLinkedin className="material-symbols-outlined text-primary" />
                    <span className="font-label-mono text-label-mono">
                      {" "}
                      Linkedin{" "}
                    </span>
                  </Link>
                  <Link href={"https://github.com/shuvro18"} className="flex gap-2 items-center cursor-pointer px-4 py-2 bg-surface-container-low rounded-sm border border-outline hover:border-primary hover:text-primary">
                    <FaGithub className="material-symbols-outlined text-primary" />
                    <span className="font-label-mono text-label-mono">
                      Github
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[80px]">
                  terminal
                </span>
              </div>
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <label className="font-label-mono text-[10px] text-primary uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded p-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md placeholder:text-on-surface-variant/30"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-mono text-[10px] text-primary uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded p-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md placeholder:text-on-surface-variant/30"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-mono text-[10px] text-primary uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded p-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md placeholder:text-on-surface-variant/30"
                    placeholder="Tell me about your project..."
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-background font-label-mono text-label-mono py-4 px-6 rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2"
                >
                  <span>SEND_MESSAGE</span>
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Toast show={showToast} />
    </>
  );
}
