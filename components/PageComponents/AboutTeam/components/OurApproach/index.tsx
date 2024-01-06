import React, { useEffect, useState } from 'react';
import ScrollableSegmentedControl from '@/components/Common/ScrollableSegmented';
import { AnimatePresence, m } from 'framer-motion';
import s from '@/components/PageComponents/AboutTeam/styles/about-team-page.module.scss';
import { EOurApproachPopUpsKeys } from '@/components/PageComponents/AboutTeam/types/enums';
import QuestionsPopUp from '@/components/PageComponents/AboutTeam/components/QuestionsPopUp';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TAboutTeamDictionary } from '@/core/lib/i18n';

const OurApproach = () => {
  const {t, locale} = usePageTranslation<TAboutTeamDictionary>(DictionaryKey.AboutTeam)
  const ourApproachThemes = t.aboutTeam.ourApproach.themes
  const [popUpState, setPopUpState] = useState(false);
  const [popUpType, setPopUpType] = useState<EOurApproachPopUpsKeys | null>(null);
  const [selectedOurApproachTheme, setSelectedOurApproachTheme] = useState(ourApproachThemes[0]);
  const [ourApproachAnimationInProgress, setOurApproachAnimationInProgress] = useState(false);

  const ourApproachItems = {
   [ourApproachThemes[0]]: [
     { text: t.aboutTeam.ourApproach.items.task[0], popUp: EOurApproachPopUpsKeys?.QUESTIONS },
     ...t.aboutTeam.ourApproach.items.task.slice(1)
   ],
   [ourApproachThemes[1]]: [...t.aboutTeam.ourApproach.items.problem],
   [ourApproachThemes[2]]: [...t.aboutTeam.ourApproach.items.reflection],
   [ourApproachThemes[3]]: [...t.aboutTeam.ourApproach.items.creation],
   [ourApproachThemes[4]]: [...t.aboutTeam.ourApproach.items.newVersion],
   [ourApproachThemes[5]]: [...t.aboutTeam.ourApproach.items.cycle],
  }

  const handleChangeOurApproachTheme = (theme: string) => {
    setSelectedOurApproachTheme(theme);
  };

  const handleOpenPopUp = (key: EOurApproachPopUpsKeys) => {
    setPopUpState(true);
    setPopUpType(key);
  };

  const handleClosePopUp = () => {
    setPopUpState(false);
    setPopUpType(null);
  };

  const ourApproachAnimationVariants = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
    exit: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    setSelectedOurApproachTheme(t.aboutTeam.ourApproach.themes[0])
  }, [locale])

  return (
    <>
      <ScrollableSegmentedControl
        disabled={ourApproachAnimationInProgress}
        onChange={handleChangeOurApproachTheme}
        defaultSelected={selectedOurApproachTheme}
        items={t.aboutTeam.ourApproach.themes}
      />
      <AnimatePresence mode={'wait'}>
        {ourApproachItems[selectedOurApproachTheme] && (
          <m.ul
            className={s.aboutTeamOurApproachList}
            variants={ourApproachAnimationVariants}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            key={selectedOurApproachTheme}
            onAnimationStart={() => setOurApproachAnimationInProgress(true)}
            onAnimationComplete={() => setOurApproachAnimationInProgress(false)}
          >
            {ourApproachItems[selectedOurApproachTheme].map((item, index) => {
              if (typeof item !== 'string') {
                return (
                  <li key={'ourApproachItem_' + index}>
                    {'⋅ '}
                    <button
                      key={'ourApproachItem_' + index}
                      className={s.aboutTeamOurApproachBtn}
                      onClick={() => handleOpenPopUp(EOurApproachPopUpsKeys.QUESTIONS)}
                    >
                      {item.text}
                    </button>
                  </li>
                );
              }
              return <li key={'ourApproachItem_' + index}>{item}</li>;
            })}
          </m.ul>
        )}
      </AnimatePresence>
      <QuestionsPopUp open={popUpState && popUpType === EOurApproachPopUpsKeys.QUESTIONS} setClose={handleClosePopUp} />
    </>
  );
};

export default OurApproach;