import { LogoSvg } from '@/components/Common/UI/svg/logo';
import Link from 'next/link';
import { geometriaMedium } from '@/core/fonts/Geometria';
import Button from '@/components/Common/UI/Button';
import { useContext } from 'react';
import { DiscussFormVisibilityContext } from '@/components/Common/Contexts/DiscussFormVisibility';
import { DEFAULT_LOCALE, DictionaryKey, TCommonDictionary } from '@/core/lib/i18n';
import usePageTranslation from '@/core/hooks/UsePageTranslation';


const Header = () => {
  const {t, locale} = usePageTranslation<TCommonDictionary>(DictionaryKey.Common)
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);

  return (
    <div className={'large-container'}>
      <header className={'header'}>
        <div className={'header__logo'}>
          <LogoSvg />
          <Link href={'/'} className={geometriaMedium.className}>
            Beans
          </Link>
        </div>
        <div className={'header__actions'}>
          {
            locale === DEFAULT_LOCALE
              ?
              <Link href={''} locale={'en'}>
                EN
              </Link>
              :
              <Link href={''} locale={'ru'}>
                RU
              </Link>
          }
          <Button onClick={() => setIsVisibleDiscussForm(!isVisibleDiscussForm)}>{t.common.buttonsLabel.discussProject}</Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
