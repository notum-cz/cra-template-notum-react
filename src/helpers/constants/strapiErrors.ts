import { i18nMark } from "@lingui/react";

interface StrapiErrorMap {
  [key: string]: string;
}

export const strapiErrors: StrapiErrorMap = {
  "Auth.form.error.blocked": i18nMark("Váš účet byl zablokován správcem."),
  "Auth.form.error.code.provide": i18nMark("Byl zadán nesprávný kód."),
  "Auth.form.error.confirmed": i18nMark("E-mail vašeho účtu není potvrzen."),
  "Auth.form.error.email.invalid": i18nMark("Tento e-mail je neplatný."),
  "Auth.form.error.email.provide": i18nMark(
    "Zadejte své uživatelské jméno nebo e-mail."
  ),
  "Auth.form.error.email.taken": i18nMark("E-mail je již obsazen."),
  "Auth.form.error.invalid": i18nMark(
    "Identifikátor nebo heslo jsou neplatné."
  ),
  "Auth.form.error.params.provide": i18nMark(
    "Byly zadány nesprávné parametry."
  ),
  "Auth.form.error.password.format": i18nMark(
    "Vaše heslo nesmí obsahovat symbol `$` více než třikrát."
  ),
  "Auth.form.error.password.local": i18nMark(
    "Tento uživatel nikdy nenastavil místní heslo, prosím přihlašte se přes poskytovatele použitého při vytváření účtu."
  ),
  "Auth.form.error.password.matching": i18nMark("Hesla se neshodují."),
  // "Auth.form.error.password.provide": i18nMark("Zadejte své heslo."),
  "Auth.form.error.ratelimit": i18nMark(
    "Příliš mnoho pokusů, prosím, zkuste to znovu za chvíli."
  ),
  "Auth.form.error.user.not-exist": i18nMark("Tento e-mail neexistuje."),
  "Auth.form.error.username.taken": i18nMark(
    "Uživatelské jméno je již obsazeno."
  ),
};

export const DEFAULT_ERROR_MESSAGE = i18nMark("Jejda, něco se pokazilo!");
