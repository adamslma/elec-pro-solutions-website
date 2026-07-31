"use client";

import { useEffect, useState } from "react";

function Phone() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
      <path
        d="M6.1 3.25 8.15 7.1 6.8 8.45a12.1 12.1 0 0 0 4.75 4.75l1.35-1.35 3.85 2.05v2.2c0 .9-.74 1.65-1.65 1.65A12.85 12.85 0 0 1 2.25 4.9c0-.91.74-1.65 1.65-1.65h2.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.55"
      />
    </svg>
  );
}

export function MobileCallBar() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    if (!contactSection || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px", threshold: 0.05 },
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="tel:+33164621840"
      className="mobile-call-bar"
      hidden={isContactVisible}
      aria-label="Appeler Élec’Pro Solutions au 01 64 62 18 40"
    >
      <span className="mobile-call-icon" aria-hidden="true">
        <Phone />
      </span>
      <span className="mobile-call-copy">
        <small>Besoin d’un conseil ?</small>
        <strong>Appeler maintenant</strong>
      </span>
    </a>
  );
}
