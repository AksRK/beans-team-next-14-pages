import { homeDictionaryEng } from '@/core/dictionaries/en/home';
import { homeDictionaryRu } from '@/core/dictionaries/ru/home';
import { commonDictionaryEng } from '@/core/dictionaries/en/common';
import { commonDictionaryRu } from '@/core/dictionaries/ru/common';
import { solutionsDictionaryEng } from '@/core/dictionaries/en/solutions';
import { solutionsDictionaryRu } from '@/core/dictionaries/ru/solutions';
import { aboutTeamDictionaryEng } from '@/core/dictionaries/en/about-team';
import { aboutTeamDictionaryRu } from '@/core/dictionaries/ru/about-team';
import { modalsDictionaryEng } from '@/core/dictionaries/en/modals';
import { modalsDictionaryRu } from '@/core/dictionaries/ru/modals';


export enum Locale {
  en = 'en',
  ru = 'ru',
}

export enum DictionaryKey {
  Home = 'home',
  Common = 'common',
  Solutions = 'solutions',
  AboutTeam = 'aboutTeam',
  Modals = 'modals'
}

type TDictionary = {
  home: typeof homeDictionaryEng;
  common: typeof commonDictionaryEng;
  solutions: typeof solutionsDictionaryEng;
  aboutTeam: typeof aboutTeamDictionaryEng;
  modals: typeof  modalsDictionaryEng;
};

type Translations = Record<Locale, TDictionary>;
export const DEFAULT_LOCALE: Locale = Locale.ru;
export const translations: Translations = {
  [Locale.en]: {
    common: {...commonDictionaryEng},
    home: {...homeDictionaryEng},
    solutions: {...solutionsDictionaryEng},
    aboutTeam: {...aboutTeamDictionaryEng},
    modals: {...modalsDictionaryEng}
  },
  [Locale.ru]: {
    common: {...commonDictionaryRu},
    home: {...homeDictionaryRu},
    solutions: {...solutionsDictionaryRu},
    aboutTeam: {...aboutTeamDictionaryRu},
    modals: {...modalsDictionaryRu}
  },
};

type Dictionary<T extends DictionaryKey> = { [key in T]: typeof translations[Locale.en][key] };

export type THomeDictionary = Dictionary<DictionaryKey.Home>;
export type TCommonDictionary = Dictionary<DictionaryKey.Common>;
export type TModalsDictionary = Dictionary<DictionaryKey.Modals>;
export type TSolutionsDictionary = Dictionary<DictionaryKey.Solutions>;
export type TAboutTeamDictionary = Dictionary<DictionaryKey.AboutTeam>;