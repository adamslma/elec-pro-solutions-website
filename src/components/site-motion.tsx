"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type SiteMotionProps = Readonly<{
  children: React.ReactNode;
}>;

export function SiteMotion({ children }: SiteMotionProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const heroTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTimeline
        .fromTo(
          "[data-hero-copy]",
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1.05 },
        )
        .fromTo(
          "[data-hero-media]",
          { opacity: 0, x: 70, scale: 0.94 },
          { opacity: 1, x: 0, scale: 1, duration: 1.2 },
          "-=0.72",
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const projectCards = gsap.utils.toArray<HTMLElement>(
        "[data-project-card]",
      );

      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 70, opacity: 0.35 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 96%",
              end: "top 68%",
              scrub: true,
            },
          },
        );

        const nextCard = projectCards[index + 1];
        if (nextCard) {
          gsap.to(card, {
            scale: 0.92,
            filter: "brightness(0.55)",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 88%",
              end: "top 18%",
              scrub: true,
            },
          });
        }
      });

      const media = gsap.matchMedia();
      media.add("(min-width: 1024px)", () => {
        const intro = scope.current?.querySelector<HTMLElement>(
          "[data-projects-intro]",
        );
        const section = scope.current?.querySelector<HTMLElement>(
          "[data-projects-section]",
        );

        if (intro && section) {
          ScrollTrigger.create({
            trigger: intro,
            start: "top 12%",
            endTrigger: section,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        }
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh, { once: true });

      return () => {
        window.removeEventListener("load", refresh);
        media.revert();
      };
    },
    { scope },
  );

  return (
    <main ref={scope} className="w-full max-w-full overflow-x-hidden">
      {children}
    </main>
  );
}
