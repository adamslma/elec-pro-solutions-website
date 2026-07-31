"use client";

import { useId, useState } from "react";

import { ArrowUpRightIcon } from "@/components/directional-icons";

export type AccordionItem = Readonly<{
  title: string;
  text: string;
}>;

type ServiceAccordionProps = Readonly<{
  items: readonly AccordionItem[];
}>;

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const accordionId = useId();

  if (items.length === 0) {
    return null;
  }

  return (
    <ul
      className="service-accordion m-0 list-none p-0"
      aria-label="Notre méthode d’intervention"
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const panelId = `${accordionId}-panel-${index}`;
        const triggerId = `${accordionId}-trigger-${index}`;

        return (
          <li
            key={item.title}
            className={`accordion-panel ${isActive ? "is-active" : ""}`}
            data-stack-card
          >
            <button
              id={triggerId}
              type="button"
              className="accordion-trigger"
              aria-controls={panelId}
              aria-expanded={isActive}
              onClick={() => setActiveIndex(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon" aria-hidden="true">
                <ArrowUpRightIcon />
              </span>
            </button>
            <section
              id={panelId}
              className="accordion-content"
              aria-labelledby={triggerId}
              hidden={!isActive}
            >
              <p>{item.text}</p>
              <a href="#contact" className="accordion-link">
                En parler à l’équipe <ArrowUpRightIcon />
              </a>
            </section>
          </li>
        );
      })}
    </ul>
  );
}
