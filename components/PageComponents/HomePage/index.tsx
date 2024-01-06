import s from './home.module.scss';
import Link from 'next/link';
import desktop_1_Animation from '@/components/Common/animations/desktop-1.json';
import desktop_2_Animation from '@/components/Common/animations/desktop-2.json';
import { useLottie } from 'lottie-react';
import { DictionaryKey, THomeDictionary } from '@/core/lib/i18n';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import Title from '@/components/Common/UI/Title';

const HomePageComponent = () => {
  const {t} = usePageTranslation<THomeDictionary>(DictionaryKey.Home)

  const optionsBox_1 = {
    animationData: desktop_1_Animation,
  };
  const optionsBox_2 = {
    animationData: desktop_2_Animation,
  };
  const box_1_animation = useLottie(optionsBox_1);
  const box_2_animation = useLottie(optionsBox_2);

  return (
    <div>
      <section className={`small-container ${s.homePage}`}>
        <Title>{t.home.title}</Title>
        <p>
          {t.home.description}
        </p>
      </section>
      <section className={'large-container'}>
        <div className={s.linksBoxWrp}>
          <Link href={'/about-team'} className={s.linkBoxWrp}>
            <div className={`${s.linkBox} ${s.linkBox_bgDark}`}>{box_1_animation.View}</div>
          </Link>
          <Link href={'/solutions'} className={s.linkBoxWrp}>
            <div className={`${s.linkBox} ${s.linkBox_bgPrimary}`}>{box_2_animation.View}</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePageComponent