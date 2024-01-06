'use client';
import s from './how-we-work.module.scss';
import Segmented from '@/components/Common/Segmented';
import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TAboutTeamDictionary } from '@/core/lib/i18n';
const HowWeWork = () => {
  const {t, locale} = usePageTranslation<TAboutTeamDictionary>(DictionaryKey.AboutTeam)
  const segmentedOptions = t.aboutTeam.howWeWork.options;
  const [selectedOption, setSelectedOption] = useState<string>(segmentedOptions[0]);
  const isTheirMethod = selectedOption === segmentedOptions[1];
  const handleChangeOption = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setSelectedOption(segmentedOptions[0])
  }, [locale])

  return (
    <div className={s.howWeWork}>
      <Segmented key={'segmented_'+locale} onChange={handleChangeOption} options={segmentedOptions} defaultSelected={selectedOption} />
      <AnimatePresence>
        <ul className={`${s.howWeWorkList} ${isTheirMethod ? s.howWeWorkList_theirMethod : ''}`}>
          <li>
            <div>
              <span>{t.aboutTeam.howWeWork.items.gettingAcquainted[0]}</span>
              <span className={isTheirMethod ? s.howWeWorkList__throughText : ''}>
                {t.aboutTeam.howWeWork.items.gettingAcquainted[1]}
              </span>
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={s.howWeWorkList__redText}>{t.aboutTeam.howWeWork.items.gettingAcquainted[2]}</div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </li>
          <m.li
            animate={{
              width: isTheirMethod ? '96%' : '100%',
              y: isTheirMethod ? -30 : 0,
              x: isTheirMethod ? '6%' : 0,
              transition: {
                delay: 0.15,
              },
            }}
          >
            <div>
              <span>{t.aboutTeam.howWeWork.items.provide[0]}</span> {t.aboutTeam.howWeWork.items.provide[1]}
              {isTheirMethod ? <span className={s.howWeWorkList__redText}>?</span> : '.'}
            </div>
            <div>
              <span>{t.aboutTeam.howWeWork.items.provide[2]}</span> {t.aboutTeam.howWeWork.items.provide[3]}
              {isTheirMethod ? <span className={s.howWeWorkList__redText}>?</span> : '.'}
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0, marginTop: '0px' }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '20px' }}
                    exit={{ height: 0, opacity: 0, marginTop: '0px' }}
                  >
                    <div className={s.howWeWorkList__redText}>
                      {t.aboutTeam.howWeWork.items.provide[4]} ¯\_(ツ)_/¯
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
          <m.li
            animate={{
              y: isTheirMethod ? -35 : 0,
            }}
          >
            <div>
              <span className={isTheirMethod ? s.howWeWorkList__throughText : ''}>{t.aboutTeam.howWeWork.items.transform[0]} </span>
              <span className={isTheirMethod ? s.howWeWorkList__throughText : ''}>
                {t.aboutTeam.howWeWork.items.transform[1]}
              </span>
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={s.howWeWorkList__redText}>{t.aboutTeam.howWeWork.items.transform[2]} </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
          <m.li
            animate={{
              width: isTheirMethod ? '96%' : '100%',
              y: isTheirMethod ? -65 : 0,
              x: isTheirMethod ? '6%' : 0,
              transition: {
                delay: 0.15,
              },
            }}
          >
            <div>
              <span>{t.aboutTeam.howWeWork.items.check[0]} </span> {t.aboutTeam.howWeWork.items.check[1]}
              <br />
              <AnimatePresence>
                {isTheirMethod && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className={s.howWeWorkList__redText}>{t.aboutTeam.howWeWork.items.check[2]}</div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.li>
        </ul>
      </AnimatePresence>
    </div>
  );
};

export default HowWeWork;
