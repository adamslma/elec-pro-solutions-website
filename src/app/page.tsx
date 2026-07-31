import Image from "next/image";

import {
  ArrowDownIcon,
  ArrowUpRightIcon,
} from "@/components/directional-icons";
import { MobileNav } from "@/components/mobile-nav";
import { QuoteForm } from "@/components/quote-form";
import {
  type AccordionItem,
  ServiceAccordion,
} from "@/components/service-accordion";
import { SiteMotion } from "@/components/site-motion";
import {
  type Testimonial,
  TestimonialCarousel,
} from "@/components/testimonial-carousel";
import { MobileCallBar } from "@/components/mobile-call-bar";

const services = [
  {
    title: "Bornes de recharge",
    description:
      "Une infrastructure calibrée pour votre bâtiment, vos véhicules et les usages qui arrivent demain.",
    detail: "Étude, fourniture, pose et suivi",
    className: "md:col-span-7 md:row-span-2",
    alt: "Technicien intervenant sur une installation électrique",
    image:
      "https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Maintenance professionnelle",
    description:
      "Des visites planifiées et des interventions lisibles pour que votre activité reste sous tension.",
    detail: "PME, commerces et cabinets",
    className: "md:col-span-5",
    alt: "Électricien contrôlant un tableau électrique",
    image:
      "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Rénovation électrique",
    description:
      "Tableau, distribution et éclairage remis à niveau avec une exécution nette et documentée.",
    detail: "Diagnostic, normes et rénovation",
    className: "md:col-span-5",
    alt: "Installation d’un tableau électrique en atelier",
    image:
      "https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
] as const;

const steps: readonly AccordionItem[] = [
  {
    title: "Comprendre avant d’intervenir",
    text: "Nous regardons le bâtiment, vos usages et vos contraintes d’exploitation avant de parler matériel.",
  },
  {
    title: "Chiffrer sans zone grise",
    text: "Le devis détaille les choix, les options et le calendrier. Vous savez ce qui sera fait et pourquoi.",
  },
  {
    title: "Livrer proprement, suivre vraiment",
    text: "Le chantier reste organisé, la mise en service est expliquée et l’équipe reste disponible après la pose.",
  },
] as const;

const projects = [
  {
    place: "Bussy-Saint-Georges",
    title: "Une maison remise en sécurité, sans compromis sur les finitions.",
    scope: "Rénovation complète",
    image:
      "https://images.unsplash.com/photo-1520234939602-6b957f8b9c1c?auto=format&fit=crop&w=1600&q=88",
    alt: "Rénovation électrique d’une maison contemporaine",
  },
  {
    place: "Noisiel",
    title: "Des bureaux mieux éclairés et plus sobres au quotidien.",
    scope: "Éclairage professionnel",
    image:
      "https://images.pexels.com/photos/12234617/pexels-photo-12234617.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Éclairage linéaire dans un espace professionnel contemporain",
  },
  {
    place: "Marne-la-Vallée",
    title: "Une flotte prête à charger sans déséquilibrer le bâtiment.",
    scope: "Mobilité électrique",
    image:
      "https://images.unsplash.com/photo-1761401438999-57f0ebef195e?auto=format&fit=crop&w=1600&q=88",
    alt: "Bornes de recharge sur un parking d’entreprise",
  },
] as const;

const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Une équipe fiable, ponctuelle et claire dans ses explications. Le chantier n’a jamais perturbé notre cabinet.",
    author: "Sophie Lambert",
    role: "Gérante, cabinet médical à Lagny-sur-Marne",
    portrait:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85",
  },
  {
    quote:
      "Nous avons enfin un contrat de maintenance qui correspond à nos locaux et à notre réalité opérationnelle.",
    author: "Marc Delaunay",
    role: "Directeur, PME industrielle à Torcy",
    portrait:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85",
  },
  {
    quote:
      "Le devis était précis, le tableau a été rénové proprement et nous savions toujours où en était le projet.",
    author: "Claire Bernard",
    role: "Propriétaire à Bussy-Saint-Georges",
    portrait:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=85",
  },
] as const;

const marqueeItems = [
  "Installation générale",
  "Bornes de recharge",
  "Mise en sécurité",
  "Maintenance",
  "Éclairage",
  "Domotique",
] as const;

function Bolt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
      <path
        d="m11.9 2-7 9h4.7L8.7 18l6.4-9.2h-4.4L11.9 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <SiteMotion>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Navigation principale">
          <a
            href="#top"
            className="brand"
            aria-label="Élec’Pro Solutions, accueil"
          >
            <span className="brand-mark">
              <Bolt />
            </span>
            <span>
              Élec’Pro <strong>Solutions</strong>
            </span>
          </a>
          <div className="nav-links">
            <a href="#expertises">Expertises</a>
            <a href="#methode">Méthode</a>
            <a href="#realisations">Réalisations</a>
          </div>
          <a
            href="#contact"
            className="button button-small button-signal nav-cta"
          >
            Démarrer un projet
            <ArrowUpRightIcon />
          </a>
          <MobileNav />
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="top" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy" data-hero-copy>
              <p className="kicker">Électriciens en Seine-et-Marne</p>
              <h1 className="max-w-6xl">
                <span className="hero-line line-clamp-1">
                  Le courant passe.
                </span>
                <span className="hero-line">
                  Le stress, <em>non.</em>
                </span>
              </h1>
              <div className="hero-bottom">
                <p>
                  Installation, recharge et maintenance. Une équipe locale qui
                  sécurise le chantier autant que le résultat.
                </p>
                <div className="hero-actions">
                  <a
                    href="#contact"
                    className="button button-large button-signal"
                  >
                    Obtenir un devis clair
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    href="#expertises"
                    className="button button-large button-ghost"
                  >
                    Découvrir nos métiers
                    <ArrowDownIcon />
                  </a>
                </div>
              </div>
            </div>

            <figure className="hero-media group" data-hero-media>
              <Image
                src="https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Technicien diagnostiquant un tableau électrique"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 768px) calc(100vw - 4rem), 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="hero-media-shade" />
              <figcaption>
                <span>Diagnostic précis</span>
                <span>Exécution maîtrisée</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="marquee" aria-label="Nos domaines d’intervention">
          <div className="marquee-track">
            {[0, 1, 2, 3, 4].map((group) => (
              <div
                key={group}
                className="marquee-group"
                aria-hidden={group > 0}
              >
                {marqueeItems.map((item) => (
                  <span key={`${group}-${item}`} className="marquee-item">
                    {item}
                    <i aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="expertises" className="light-section chapter">
          <div className="section-shell">
            <div className="section-intro">
              <p className="kicker dark-kicker" data-reveal>
                Là où nous faisons la différence
              </p>
              <h2 data-reveal>De la puissance, jamais d’approximation.</h2>
              <p className="section-lead" data-reveal>
                Nous concevons chaque intervention autour du lieu, de ses usages
                et de ceux qui y travaillent. Le bon matériel, au bon endroit,
                avec un chantier qui reste lisible.
              </p>
            </div>

            <div className="service-grid" data-bento>
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`service-card group ${service.className}`}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, (min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="service-shade" />
                  <div className="service-content">
                    <p>{service.detail}</p>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <a
                      href="#contact"
                      className="round-link"
                      aria-label={`Demander un devis pour ${service.title}`}
                    >
                      <ArrowUpRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="methode" className="dark-section chapter">
          <div className="technical-lines" aria-hidden="true" />
          <div className="section-shell method-layout">
            <div className="method-copy" data-reveal>
              <p className="kicker">Une méthode sans court-circuit</p>
              <h2>Trois temps. Un chantier sous contrôle.</h2>
              <p>
                La fiabilité se décide avant le premier coup de tournevis. Notre
                méthode rend chaque choix compréhensible, du diagnostic à la
                mise en service.
              </p>
              <a href="#contact" className="text-link">
                Échanger avec un technicien
                <ArrowUpRightIcon />
              </a>
            </div>
            <div className="method-interactive">
              <ServiceAccordion items={steps} />
              <div className="method-note">
                <span className="method-note-mark">
                  <Bolt />
                </span>
                <p>
                  Une équipe salariée, un interlocuteur unique et le même niveau
                  d’exigence sur chaque détail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="realisations"
          className="light-section chapter projects-section"
          data-projects-section
        >
          <div className="section-shell projects-layout">
            <div className="projects-intro" data-projects-intro>
              <p className="kicker dark-kicker">Le résultat, sur le terrain</p>
              <h2>Des lieux qui fonctionnent mieux.</h2>
              <p>
                Une installation réussie se remarque surtout à ce qu’elle ne
                perturbe plus : le travail reprend, la charge démarre, la
                lumière tombe juste.
              </p>
            </div>
            <div className="project-stack">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="project-card group"
                  data-project-card
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="project-shade" />
                  <div className="project-meta">
                    <span>{project.scope}</span>
                    <span>{project.place}</span>
                  </div>
                  <div className="project-title">
                    <h3>{project.title}</h3>
                    <a
                      href="#contact"
                      className="round-link"
                      aria-label={`Parler d’un projet similaire à ${project.place}`}
                    >
                      <ArrowUpRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section chapter">
          <div className="section-shell testimonial-layout">
            <div>
              <p className="kicker ink-kicker">Ce que la confiance change</p>
              <h2>La tranquillité fait partie du chantier.</h2>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        <section id="contact" className="contact-section chapter">
          <div className="contact-orbit" aria-hidden="true" />
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="kicker">Votre projet peut commencer ici</p>
              <h2>Qu’est-ce qui doit mieux fonctionner ?</h2>
              <p>
                Décrivez le lieu, l’urgence et le résultat attendu. Quelques
                informations suffisent pour préparer un premier échange utile.
              </p>
              <div className="contact-details">
                <a href="tel:+33164621840">
                  <small>Par téléphone</small>
                  <strong>01 64 62 18 40</strong>
                </a>
                <a href="mailto:bonjour@elecpro-solutions.fr">
                  <small>Par e-mail</small>
                  <strong>bonjour@elecpro-solutions.fr</strong>
                </a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <MobileCallBar />

      <footer id="legal" className="footer">
        <div className="footer-wordmark" aria-hidden="true">
          Élec’Pro
        </div>
        <div className="footer-row">
          <a href="#top" className="brand">
            <span className="brand-mark">
              <Bolt />
            </span>
            <span>
              Élec’Pro <strong>Solutions</strong>
            </span>
          </a>
          <p>
            Électricité générale et solutions énergétiques en Seine-et-Marne.
          </p>
          <div>
            <a href="#contact">Contact</a>
            <a href="#legal">Mentions légales</a>
          </div>
        </div>
        <p className="footer-disclaimer">
          Démonstration fictive d’interface web : coordonnées, avis et
          réalisations présentés à titre illustratif.
        </p>
      </footer>
    </SiteMotion>
  );
}
