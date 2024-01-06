import { useRouter } from 'next/router';
import { translations, Locale, DictionaryKey, DEFAULT_LOCALE } from '@/core/lib/i18n';

const usePageTranslation = <T>(...dictionaryKeys: Array<keyof T>) => {
  const { locale } = useRouter();

  const translation = dictionaryKeys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: translations[locale as Locale || DEFAULT_LOCALE][key as DictionaryKey],
    };
  }, {} as T);

  return { t: translation as T, locale };
};

export default usePageTranslation;
