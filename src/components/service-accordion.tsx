"use client";

import { useState } from "react";

export type AccordionItem = Readonly<{
  title: string;
  text: string;
}>;

type ServiceAccordionProps = Readonly<{
  items: readonly AccordionItem[];
}>;

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul
      className="service-accordion m-0 list-none p-0"
      aria-label="Notre méthode d’intervention"
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const panelId = `accordion-panel-${index}`;

        return (
          <li
            key={item.title}
            className={`accordion-panel ${isActive ? "is-active" : ""}`}
            data-stack-card
          >
            <button
              type="button"
              className="accordion-trigger"
              aria-controls={panelId}
              aria-expanded={isActive}
              onClick={() => setActiveIndex(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon" aria-hidden="true">
                ↗
              </span>
            </button>
            <div id={panelId} className="accordion-content" hidden={!isActive}>
              <p>{item.text}</p>
              <a href="#contact" className="accordion-link">
                En parler à l’équipe <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
