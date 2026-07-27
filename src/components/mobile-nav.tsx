"use client";

import { useEffect, useId, useState } from "react";

const links = [
  { href: "#expertises", label: "Expertises" },
  { href: "#methode", label: "Méthode" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-trigger md:hidden"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span
          className={`menu-icon ${isOpen ? "is-open" : ""}`}
          aria-hidden="true"
        >
          <span className="menu-icon-line" />
          <span className="menu-icon-line" />
        </span>
      </button>
      {isOpen ? (
        <div id={menuId} className="mobile-menu md:hidden">
          <div className="mobile-menu-panel">
            <p className="kicker">Élec’Pro Solutions</p>
            <nav aria-label="Navigation mobile" className="mt-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
            <a
              href="tel:+33164621840"
              className="button button-large button-signal mt-10 w-full"
              onClick={() => setIsOpen(false)}
            >
              Appeler l’équipe
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
