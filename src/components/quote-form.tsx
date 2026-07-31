"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";

import { ArrowUpRightIcon } from "@/components/directional-icons";

const MAX_FILE_COUNT = 5;
const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_MESSAGE_LENGTH = 1500;

type FieldName =
  | "name"
  | "phone"
  | "email"
  | "location"
  | "project"
  | "message"
  | "attachments";

type FormErrors = Partial<Record<FieldName, string>>;

function getFileError(files: readonly File[]) {
  if (files.length > MAX_FILE_COUNT) {
    return `Ajoutez au maximum ${MAX_FILE_COUNT} fichiers.`;
  }

  const oversizedFile = files.find((file) => file.size > MAX_FILE_SIZE);
  if (oversizedFile) {
    return `« ${oversizedFile.name} » dépasse la limite de 8 Mo.`;
  }

  const unsupportedFile = files.find(
    (file) => {
      const hasSupportedExtension =
        /\.(avif|gif|heic|heif|jpe?g|pdf|png|webp)$/i.test(file.name);
      return (
        !file.type.startsWith("image/") &&
        file.type !== "application/pdf" &&
        !hasSupportedExtension
      );
    },
  );
  if (unsupportedFile) {
    return `« ${unsupportedFile.name} » n’est ni une image ni un PDF.`;
  }

  return undefined;
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
  const [errors, setErrors] = useState<FormErrors>({});
  const successRef = useRef<HTMLOutputElement>(null);

  useEffect(() => {
    if (submitted) {
      successRef.current?.focus();
    }
  }, [submitted]);

  const clearError = (field: FieldName) => {
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (name: FieldName) =>
      String(formData.get(name) ?? "").trim();
    const nextErrors: FormErrors = {};

    if (value("name").length < 2) {
      nextErrors.name = "Indiquez un nom d’au moins 2 caractères.";
    }

    const phone = value("phone").replace(/[^+\d]/g, "");
    if (phone.length < 6) {
      nextErrors.phone = "Indiquez un numéro de téléphone complet.";
    }

    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    if (!value("email") || !emailInput.validity.valid) {
      nextErrors.email = "Indiquez une adresse e-mail valide.";
    }

    if (value("location").length < 2) {
      nextErrors.location = "Indiquez une ville ou un code postal.";
    }

    if (!value("project")) {
      nextErrors.project = "Sélectionnez la prestation la plus proche de votre besoin.";
    }

    if (value("message").length < 20) {
      nextErrors.message =
        "Ajoutez au moins 20 caractères pour nous aider à comprendre le chantier.";
    }

    const files = formData
      .getAll("attachments")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);
    nextErrors.attachments = getFileError(files);

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    requestAnimationFrame(() => {
      document.querySelector<HTMLInputElement>('.quote-form input[name="name"]')?.focus();
    });
  };

  if (submitted) {
    return (
      <output
        ref={successRef}
        className="form-success"
        tabIndex={-1}
      >
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
          onClick={handleReset}
        >
          Envoyer une autre demande
          <ArrowUpRightIcon />
        </button>
      </output>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      {Object.values(errors).some(Boolean) ? (
        <p className="form-error-summary" aria-live="polite">
          Vérifiez les champs signalés ci-dessous avant de renvoyer la demande.
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span className="field-label">Votre nom</span>
          <input
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            name="name"
            type="text"
            placeholder="Julien Morel"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onInput={() => clearError("name")}
          />
          {errors.name ? (
            <span id="name-error" className="field-error">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="field">
          <span className="field-label">Téléphone</span>
          <input
            required
            maxLength={30}
            autoComplete="tel"
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="06 00 00 00 00"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            onInput={() => clearError("phone")}
          />
          {errors.phone ? (
            <span id="phone-error" className="field-error">
              {errors.phone}
            </span>
          ) : null}
        </label>
        <label className="field">
          <span className="field-label">Votre e-mail</span>
          <input
            required
            maxLength={254}
            autoComplete="email"
            name="email"
            type="email"
            placeholder="vous@entreprise.fr"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onInput={() => clearError("email")}
          />
          {errors.email ? (
            <span id="email-error" className="field-error">
              {errors.email}
            </span>
          ) : null}
        </label>
        <label className="field">
          <span className="field-label">Lieu du projet</span>
          <input
            required
            minLength={2}
            maxLength={120}
            autoComplete="postal-code"
            name="location"
            type="text"
            placeholder="Ville ou code postal"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
            onInput={() => clearError("location")}
          />
          {errors.location ? (
            <span id="location-error" className="field-error">
              {errors.location}
            </span>
          ) : null}
        </label>
        <label className="field sm:col-span-2">
          <span className="field-label">Ce dont vous avez besoin</span>
          <select
            required
            name="project"
            defaultValue=""
            aria-invalid={Boolean(errors.project)}
            aria-describedby={errors.project ? "project-error" : undefined}
            onChange={() => clearError("project")}
          >
            <option value="">Sélectionner une prestation</option>
            <option>Installation de borne de recharge</option>
            <option>Contrat de maintenance professionnelle</option>
            <option>Rénovation électrique complète</option>
            <option>Mise aux normes / sécurisation</option>
            <option>Autre demande</option>
          </select>
          {errors.project ? (
            <span id="project-error" className="field-error">
              {errors.project}
            </span>
          ) : null}
        </label>
        <label className="field sm:col-span-2">
          <span className="field-label">Parlez-nous du chantier</span>
          <textarea
            required
            minLength={20}
            maxLength={MAX_MESSAGE_LENGTH}
            name="message"
            rows={4}
            placeholder="Bâtiment, urgence, délais souhaités, photos disponibles…"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "message-hint message-error" : "message-hint"
            }
            onInput={() => clearError("message")}
          />
          <span id="message-hint" className="field-hint">
            20 à {MAX_MESSAGE_LENGTH.toLocaleString("fr-FR")} caractères.
          </span>
          {errors.message ? (
            <span id="message-error" className="field-error">
              {errors.message}
            </span>
          ) : null}
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
            aria-invalid={Boolean(errors.attachments)}
            aria-describedby={
              errors.attachments
                ? "attachments-hint attachments-error"
                : "attachments-hint"
            }
            onChange={(event) => {
              const files = Array.from(event.currentTarget.files ?? []);
              const fileError = getFileError(files);
              setErrors((current) => ({
                ...current,
                attachments: fileError,
              }));
            }}
          />
          <span id="attachments-hint" className="field-hint">
            Images ou PDF, 5 fichiers maximum, 8 Mo par fichier.
          </span>
          {errors.attachments ? (
            <span id="attachments-error" className="field-error">
              {errors.attachments}
            </span>
          ) : null}
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
          <ArrowUpRightIcon />
        </button>
      </div>
    </form>
  );
}
