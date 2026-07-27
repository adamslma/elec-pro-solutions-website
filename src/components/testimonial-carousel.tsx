"use client";

import Image from "next/image";
import { useState } from "react";

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

  const move = (offset: number) => {
    setActiveIndex(
      (current) =>
        (current + offset + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="testimonial-shell" data-testimonials>
      <div className="testimonial-portraits" aria-hidden="true">
        {testimonials.map((testimonial, index) => (
          <span
            key={testimonial.portrait}
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
              key={testimonial.author}
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
                <span className="testimonial-index">0{index + 1}</span>
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
          ←
        </button>
        <button
          type="button"
          className="carousel-button"
          onClick={() => move(1)}
          aria-label="Témoignage suivant"
        >
          →
        </button>
      </div>
    </div>
  );
}
