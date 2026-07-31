import type { Metadata } from "next";
import Link from "next/link";

import { AsDigitalLink } from "@/components/as-digital-link";
import { BoltIcon } from "@/components/brand-mark";
import { ArrowLeftIcon } from "@/components/directional-icons";

export const metadata: Metadata = {
  title: "Mentions légales | Démonstration UX par AS Digital",
  description:
    "Informations sur la nature fictive et non fonctionnelle du site Élec’Pro Solutions, conçu par AS Digital comme démonstration de son expertise UX.",
};

const legalSections = [
  {
    id: "nature",
    title: "Nature de cette démonstration",
    content: (
      <>
        <p>
          Élec’Pro Solutions est une marque fictive créée uniquement pour cette
          démonstration. Le site ne représente aucune entreprise d’électricité
          réelle et ne permet ni de commander une prestation, ni d’obtenir un
          devis, ni de conclure un contrat.
        </p>
        <p>
          Cette expérience a été conçue par <AsDigitalLink /> pour présenter son
          expertise en UX design, UI design et conception d’interfaces web.
        </p>
      </>
    ),
  },
  {
    id: "edition",
    title: "Édition et réalisation",
    content: (
      <>
        <p>
          Conception UX, direction artistique et réalisation de la démonstration
          : <AsDigitalLink />.
        </p>
        <p>
          Les informations juridiques complètes propres à <AsDigitalLink /> —
          forme sociale, adresse, numéro d’immatriculation et hébergeur — ne
          sont pas fournies dans ce projet. Elles devront être ajoutées avant
          toute utilisation de cette page comme mentions légales d’un site
          réellement exploité.
        </p>
      </>
    ),
  },
  {
    id: "contenus",
    title: "Contenus et identités fictifs",
    content: (
      <p>
        Les coordonnées, lieux, prestations, réalisations, témoignages, noms,
        portraits et résultats présentés sont fictifs ou illustratifs. Ils ne
        constituent ni des références commerciales vérifiables, ni des avis
        clients, ni des preuves d’activité.
      </p>
    ),
  },
  {
    id: "donnees",
    title: "Données personnelles",
    content: (
      <>
        <p>
          Le formulaire de demande de devis fonctionne uniquement dans
          l’interface de démonstration. Les informations saisies ne sont ni
          transmises à <AsDigitalLink /> ou à Élec’Pro Solutions, ni
          enregistrées dans une base de données, ni utilisées à des fins
          commerciales.
        </p>
        <p>
          Aucune donnée personnelle ne doit être communiquée dans ce formulaire
          de démonstration.
        </p>
      </>
    ),
  },
  {
    id: "services-tiers",
    title: "Ressources et services tiers",
    content: (
      <p>
        Le site peut charger des typographies et des images depuis des services
        tiers, notamment Fontshare, Unsplash et Pexels. Ces ressources sont
        utilisées à des fins de présentation visuelle et restent soumises aux
        conditions de leurs fournisseurs respectifs.
      </p>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: (
      <p>
        La conception de l’interface, sa structure, ses textes de démonstration
        et son exécution visuelle constituent un travail de présentation d’AS
        Digital. Les photographies externes demeurent la propriété de leurs
        auteurs et ayants droit respectifs.
      </p>
    ),
  },
  {
    id: "responsabilite",
    title: "Limitation de responsabilité",
    content: (
      <p>
        Cette démonstration est fournie uniquement pour présenter un
        savoir-faire de conception. <AsDigitalLink /> ne garantit pas que les
        informations techniques ou commerciales fictives puissent être utilisées
        pour préparer ou réaliser une installation électrique réelle.
      </p>
    ),
  },
] as const;

export default function LegalNoticePage() {
  return (
    <div className="legal-page">
      <a href="#legal-content" className="skip-link">
        Aller au contenu
      </a>

      <header className="legal-header">
        <nav className="section-shell legal-nav" aria-label="Navigation légale">
          <Link
            href="/"
            className="brand"
            aria-label="Élec’Pro Solutions, accueil"
          >
            <span className="brand-mark">
              <BoltIcon />
            </span>
            <span>
              Élec’Pro <strong>Solutions</strong>
            </span>
          </Link>
          <Link href="/" className="legal-back-link">
            <ArrowLeftIcon />
            Retour au site
          </Link>
        </nav>
      </header>

      <main id="legal-content" tabIndex={-1}>
        <section className="legal-hero" aria-labelledby="legal-title">
          <div className="section-shell legal-hero-layout">
            <div>
              <h1 id="legal-title">Mentions légales et démonstration.</h1>
              <p className="legal-updated">
                Dernière mise à jour : 31 juillet 2026
              </p>
            </div>
            <div className="legal-demo-note">
              <p>Une vitrine UX, pas une entreprise d’électricité.</p>
              <span>
                Site fictif et non fonctionnel conçu par <AsDigitalLink /> pour
                montrer son expertise UX.
              </span>
            </div>
          </div>
        </section>

        <div className="section-shell legal-layout">
          <aside className="legal-summary" aria-label="À retenir">
            <p>À retenir</p>
            <strong>Aucun service réel n’est proposé sur ce site.</strong>
            <span>
              Toutes les identités, coordonnées et preuves commerciales sont
              fictives ou illustratives.
            </span>
          </aside>

          <article className="legal-article">
            {legalSections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                <div>{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="section-shell legal-footer-row">
          <p>
            <AsDigitalLink /> — Démonstration d’expertise UX
          </p>
          <Link href="/">Revenir à l’accueil</Link>
        </div>
      </footer>
    </div>
  );
}
