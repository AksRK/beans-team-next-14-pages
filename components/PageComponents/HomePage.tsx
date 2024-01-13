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
      <section className={`small-container home-page`}>
        <Title>{t.home.title}</Title>
        <p>
          {t.home.description}
        </p>
      </section>
      <section className={'large-container'}>
        <div className={'links-box-wrp'}>
          <Link href={'/about-team'} className={'link-box-wrp'}>
            <div className={'link-box link-box--bg-dark'}>{box_1_animation.View}</div>
          </Link>
          <Link href={'/solutions'} className={'link-box-wrp'}>
            <div className={'link-box link-box--bg-primary'}>{box_2_animation.View}</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePageComponent