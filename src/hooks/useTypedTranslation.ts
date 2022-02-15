import { useTranslation } from 'react-i18next';
import translations from 'assets/locales/lt.json';

// i18n types
type Join<S1, S2> = S1 extends string
  ? S2 extends string
    ? `${S1}.${S2}`
    : never
  : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? Join<K, Paths<T[K]>>
    : K;
}[keyof T];

type TranslationKeys = Paths<typeof translations>;

interface IDateTranslationType {
  time?: Date;
  date?: Date;
}

export const useTypedTranslations = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: IDateTranslationType) => t(s, f),
  };
};
