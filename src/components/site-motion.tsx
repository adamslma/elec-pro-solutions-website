"use client";

import { useEffect, useRef } from "react";

type SiteMotionProps = Readonly<{
  children: React.ReactNode;
}>;

const easeOut = "cubic-bezier(0.22, 1, 0.36, 1)";
const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function SiteMotion({ children }: SiteMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scope.current;
    if (
      !root ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const animations: Animation[] = [];
    const isCompact = window.matchMedia("(max-width: 1023px)").matches;

    const play = (
      element: HTMLElement,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      animations.push(element.animate(keyframes, options));
    };

    const heroCopy = root.querySelector<HTMLElement>("[data-hero-copy]");
    const heroMedia = root.querySelector<HTMLElement>("[data-hero-media]");

    if (heroCopy) {
      play(
        heroCopy,
        [
          { transform: "translate3d(0, 28px, 0)" },
          { transform: "translate3d(0, 0, 0)" },
        ],
        { duration: 720, easing: easeOut },
      );
    }

    if (heroMedia) {
      play(
        heroMedia,
        [
          {
            transform: isCompact
              ? "translate3d(0, 20px, 0) scale(0.97)"
              : "translate3d(56px, 0, 0) scale(0.97)",
          },
          { transform: "translate3d(0, 0, 0) scale(1)" },
        ],
        { duration: 820, delay: 80, easing: easeOut },
      );
    }

    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const projectCards = Array.from(
      root.querySelectorAll<HTMLElement>("[data-project-card]"),
    ).map((card) => ({
      card,
      shade: card.querySelector<HTMLElement>(".project-shade"),
      translateY: 0,
      scale: 1,
      shadeOpacity: 0,
    }));
    const stackedProjects = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    let projectFrame: number | null = null;

    const updateProjects = () => {
      projectFrame = null;

      const viewportHeight = window.innerHeight;
      const entranceDistance = viewportHeight * 0.28;
      const stackDistance = viewportHeight * 0.7;

      projectCards.forEach((project, index) => {
        const rect = project.card.getBoundingClientRect();
        const layoutTop = rect.top - project.translateY;
        const entranceProgress = clamp(
          (viewportHeight * 0.96 - layoutTop) / entranceDistance,
        );
        const translateY = 70 * (1 - entranceProgress);

        const nextProject = projectCards[index + 1];
        let stackProgress = 0;

        if (nextProject && stackedProjects.matches) {
          const nextRect = nextProject.card.getBoundingClientRect();
          const nextLayoutTop = nextRect.top - nextProject.translateY;
          stackProgress = clamp(
            (viewportHeight * 0.88 - nextLayoutTop) / stackDistance,
          );
        }

        const scale = 1 - stackProgress * 0.08;
        const shadeOpacity = stackProgress * 0.52;
        const isMoving =
          (entranceProgress > 0 && entranceProgress < 1) ||
          (stackProgress > 0 && stackProgress < 1);

        if (
          Math.abs(project.translateY - translateY) > 0.05 ||
          Math.abs(project.scale - scale) > 0.0005
        ) {
          project.card.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
          project.translateY = translateY;
          project.scale = scale;
        }

        if (
          project.shade &&
          Math.abs(project.shadeOpacity - shadeOpacity) > 0.002
        ) {
          project.shade.style.backgroundColor = `rgb(17 17 15 / ${shadeOpacity.toFixed(3)})`;
          project.shadeOpacity = shadeOpacity;
        }

        project.card.style.willChange = isMoving ? "transform" : "auto";
        if (project.shade) {
          project.shade.style.willChange = isMoving
            ? "background-color"
            : "auto";
        }
      });
    };

    const scheduleProjectUpdate = () => {
      if (projectFrame === null) {
        projectFrame = window.requestAnimationFrame(updateProjects);
      }
    };

    const resetProjects = () => {
      projectCards.forEach(({ card, shade }) => {
        card.style.removeProperty("transform");
        card.style.removeProperty("will-change");
        shade?.style.removeProperty("background-color");
        shade?.style.removeProperty("will-change");
      });
    };

    if (projectCards.length > 0) {
      scheduleProjectUpdate();
      window.addEventListener("scroll", scheduleProjectUpdate, {
        passive: true,
      });
      window.addEventListener("resize", scheduleProjectUpdate);
      window.addEventListener("load", scheduleProjectUpdate, { once: true });
      stackedProjects.addEventListener("change", scheduleProjectUpdate);
    }

    if (!("IntersectionObserver" in window)) {
      return () => {
        window.removeEventListener("scroll", scheduleProjectUpdate);
        window.removeEventListener("resize", scheduleProjectUpdate);
        window.removeEventListener("load", scheduleProjectUpdate);
        stackedProjects.removeEventListener("change", scheduleProjectUpdate);
        if (projectFrame !== null) {
          window.cancelAnimationFrame(projectFrame);
        }
        resetProjects();
        animations.forEach((animation) => {
          animation.cancel();
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const element = entry.target as HTMLElement;
          play(
            element,
            [
              { opacity: 0.72, transform: "translate3d(0, 24px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            { duration: 620, easing: easeOut },
          );
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    const marqueeTrack = root.querySelector<HTMLElement>(".marquee-track");
    let marqueeIsVisible = false;
    const updateMarqueeMotion = () => {
      marqueeTrack?.classList.toggle(
        "is-visible",
        marqueeIsVisible && document.visibilityState === "visible",
      );
    };
    const marqueeObserver = marqueeTrack
      ? new IntersectionObserver(
          ([entry]) => {
            marqueeIsVisible = entry?.isIntersecting ?? false;
            updateMarqueeMotion();
          },
          { rootMargin: "120px 0px" },
        )
      : null;

    if (marqueeTrack && marqueeObserver) {
      marqueeObserver.observe(marqueeTrack);
      document.addEventListener("visibilitychange", updateMarqueeMotion);
    }

    for (const element of revealElements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      marqueeObserver?.disconnect();
      document.removeEventListener("visibilitychange", updateMarqueeMotion);
      marqueeTrack?.classList.remove("is-visible");
      window.removeEventListener("scroll", scheduleProjectUpdate);
      window.removeEventListener("resize", scheduleProjectUpdate);
      window.removeEventListener("load", scheduleProjectUpdate);
      stackedProjects.removeEventListener("change", scheduleProjectUpdate);
      if (projectFrame !== null) {
        window.cancelAnimationFrame(projectFrame);
      }
      resetProjects();
      for (const animation of animations) {
        animation.cancel();
      }
    };
  }, []);

  return (
    <div ref={scope} className="w-full max-w-full overflow-x-clip">
      {children}
    </div>
  );
}
