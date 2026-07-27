"use client";

import { type FormEvent, useState } from "react";

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4" fill="none">
      <path
        d="M4 16 16 4M7 4h9v9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function SuccessMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
      <path
        d="m4 10.3 3.4 3.4L16 5.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success" aria-live="polite">
        <span className="form-success-icon">
          <SuccessMark />
        </span>
        <p className="kicker mt-8">Demande reçue</p>
        <h3>Merci, votre projet est bien cadré.</h3>
        <p>
          Dans cette démonstration, vos informations restent dans l’interface.
          En production, cette étape serait reliée à l’outil de suivi commercial
          de l’agence.
        </p>
        <button
          type="button"
          className="button button-medium button-ghost mt-8"
          onClick={() => setSubmitted(false)}
        >
          Envoyer une autre demande
          <ArrowUpRight />
        </button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span className="field-label">Votre nom</span>
          <input
            required
            autoComplete="name"
            name="name"
            type="text"
            placeholder="Julien Morel"
          />
        </label>
        <label className="field">
          <span className="field-label">Téléphone</span>
          <input
            required
            autoComplete="tel"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 00 00 00 00"
          />
        </label>
        <label className="field">
          <span className="field-label">Votre e-mail</span>
          <input
            required
            autoComplete="email"
            name="email"
            type="email"
            placeholder="vous@entreprise.fr"
          />
        </label>
        <label className="field">
          <span className="field-label">Lieu du projet</span>
          <input
            required
            autoComplete="postal-code"
            name="location"
            type="text"
            placeholder="Ville ou code postal"
          />
        </label>
        <label className="field sm:col-span-2">
          <span className="field-label">Ce dont vous avez besoin</span>
          <select required name="project" defaultValue="">
            <option value="">Sélectionner une prestation</option>
            <option>Installation de borne de recharge</option>
            <option>Contrat de maintenance professionnelle</option>
            <option>Rénovation électrique complète</option>
            <option>Mise aux normes / sécurisation</option>
            <option>Autre demande</option>
          </select>
        </label>
        <label className="field sm:col-span-2">
          <span className="field-label">Parlez-nous du chantier</span>
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Bâtiment, urgence, délais souhaités, photos disponibles…"
          />
        </label>
        <label className="field sm:col-span-2">
          <span className="field-label">
            Ajouter des documents (facultatif)
          </span>
          <input
            name="attachments"
            type="file"
            accept="image/*,.pdf"
            multiple
          />
        </label>
      </div>
      <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-5 text-white/55">
          Démo fictive : aucune donnée n’est envoyée. En production, ce
          formulaire serait relié à un endpoint sécurisé.
        </p>
        <button
          type="submit"
          className="button button-large button-signal shrink-0"
        >
          <span>Envoyer ma demande</span>
          <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}
