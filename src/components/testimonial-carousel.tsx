"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/directional-icons";

export type Testimonial = Readonly<{
  quote: string;
  author: string;
  role: string;
  portrait: string;
}>;

type TestimonialCarouselProps = Readonly<{
  testimonials: readonly Testimonial[];
}>;

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (testimonials.length === 0) {
    return (
      <output className="testimonial-shell testimonial-empty">
        <p>Les retours clients seront bientôt disponibles.</p>
      </output>
    );
  }

  const move = (offset: number) => {
    setActiveIndex(
      (current) =>
        (current + offset + testimonials.length) % testimonials.length,
    );
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) {
      return;
    }

    const distance = clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) >= 48) {
      move(distance > 0 ? -1 : 1);
    }
  };

  return (
    <div
      className="testimonial-shell"
      data-testimonials
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const clientX = event.changedTouches[0]?.clientX;
        if (clientX !== undefined) {
          handleTouchEnd(clientX);
        }
      }}
      onTouchCancel={() => {
        touchStartX.current = null;
      }}
    >
      <div className="testimonial-portraits" aria-hidden="true">
        {testimonials.map((testimonial, index) => (
          <span
            key={`${testimonial.portrait}-${index}`}
            className={`testimonial-portrait ${
              index === activeIndex ? "is-active" : ""
            }`}
          >
            <Image
              src={testimonial.portrait}
              alt=""
              fill
              sizes="72px"
              className="object-cover"
            />
          </span>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;

          return (
            <blockquote
              key={`${testimonial.author}-${index}`}
              className={`testimonial ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
              data-testimonial={index}
            >
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <footer>
                <div>
                  <p>{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </div>
                <span className="testimonial-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </footer>
            </blockquote>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-button"
          onClick={() => move(-1)}
          aria-label="Témoignage précédent"
        >
          <ArrowLeftIcon />
        </button>
        <button
          type="button"
          className="carousel-button"
          onClick={() => move(1)}
          aria-label="Témoignage suivant"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
