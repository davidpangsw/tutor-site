import { Formats, TranslationValues, useTranslations as useT } from "next-intl";

type TFunction = (key: string, values?: TranslationValues, formats?: Formats) => string;

/**
 * Custom hook for fallback translations
 * @param namespaces Array of namespaces to check for translations
 * @returns {Function} Translation function with fallback support
 */
export const useFallbackTranslations = (namespaces: string[]): TFunction => {
  const translations = namespaces.map((ns) => useT(ns));

  const t: TFunction = (key, values?, formats?) => {
    for (const translate of translations) {
      try {
        const value = translate(key, values, formats);
        if (value !== key) return value; // Return the first valid translation
      } catch (error) {
        // Handle specific error types if needed
        if (error instanceof Error && error.message.includes('Could not resolve translation')) {
          continue; // Key not found in this namespace, try the next one
        } else {
          // throw error; // Re-throw other unexpected errors
        }
      }
    }
    return key; // Return key if no translation is found
  };

  return t;
};