'use client';
import s from './questions-pop-up.module.scss';
import PopUp from '@/components/Common/UI/PopUp';
import { FC, useContext } from 'react';
import Button from '@/components/Common/UI/Button';
import { DiscussFormVisibilityContext } from '@/components/Common/Contexts/DiscussFormVisibility';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TAboutTeamDictionary } from '@/core/lib/i18n';

interface IQuestionsPopUp {
  open: boolean;
  setClose: () => void;
}
const QuestionsPopUp: FC<IQuestionsPopUp> = ({ open, setClose }) => {
  const {t} = usePageTranslation<TAboutTeamDictionary>(DictionaryKey.AboutTeam)
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  return (
    <PopUp title={t.aboutTeam.popUps.questions.title} open={open} setClose={setClose}>
      <ul className={s.questionPopUpList}>
        {t.aboutTeam.popUps.questions.items.map((text, index) => (
          <li key={'question_' + index}>{text}</li>
        ))}
      </ul>
      <div className={s.questionPopUpBtnWrp}>
        <Button onClick={() => setIsVisibleDiscussForm(!isVisibleDiscussForm)}>{t.aboutTeam.popUps.actions.write}</Button>
      </div>
    </PopUp>
  );
};

export default QuestionsPopUp;
