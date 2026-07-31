"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ArrowUpRightIcon } from "@/components/directional-icons";

const links = [
  { href: "#expertises", label: "Expertises" },
  { href: "#methode", label: "Méthode" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
] as const;

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
    );

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus?.isConnected) {
        previousFocus.focus();
      }
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
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
      {isMounted && isOpen
        ? createPortal(
        <div
          id={menuId}
          ref={dialogRef}
          className="mobile-menu md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${menuId}-title`}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              setIsOpen(false);
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="mobile-menu-panel">
            <div className="mobile-menu-head">
              <p id={`${menuId}-title`} className="kicker">
                Élec’Pro Solutions
              </p>
              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Fermer le menu"
                onClick={() => setIsOpen(false)}
              >
                <span className="menu-icon is-open" aria-hidden="true">
                  <span className="menu-icon-line" />
                  <span className="menu-icon-line" />
                </span>
              </button>
            </div>
            <nav aria-label="Navigation mobile" className="mt-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowUpRightIcon />
                </a>
              ))}
            </nav>
            <a
              href="tel:+33164621840"
              className="button button-large button-signal mt-10 w-full"
              onClick={() => setIsOpen(false)}
            >
              Appeler l’équipe
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>,
            document.body,
          )
        : null}
    </>
  );
}
