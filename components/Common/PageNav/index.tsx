'use client';
import s from './page-nav.module.scss';
import Segmented from '@/components/Common/Segmented';
import Button from '@/components/Common/UI/Button';
import { FC, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { DiscussFormVisibilityContext } from '@/components/Common/Contexts/DiscussFormVisibility';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TCommonDictionary, THomeDictionary } from '@/core/lib/i18n';

interface IPageNav {
  isVisible: boolean;
  disabled: boolean;
}

const PageNav: FC<IPageNav> = ({ isVisible, disabled }) => {
  const {t, locale} = usePageTranslation<TCommonDictionary>(DictionaryKey.Common)
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  const pathName = usePathname();
  const router = useRouter();
  const routes = [
    { name: t.common.buttonsLabel.beans, path: '/about-team' },
    { name: t.common.buttonsLabel.ourSolutions, path: '/solutions' },
  ];

  const [selectedOption, setSelectedOption] = useState<string>('Бинс');

  const followLink = (option: string) => {
    if (!disabled) {
      setSelectedOption(option);
      const selectedRoute = routes.find(route => route.name === option);
      if (selectedRoute) {
        router.push(selectedRoute.path);
      }
    }
  };

  useEffect(() => {
    const selectedRoute = routes.find(route => route.path === pathName);
    if (selectedRoute) {
      setSelectedOption(selectedRoute.name);
    }
  }, [pathName, isVisible, locale]);

  const animationVariants = {
    initial: {
      bottom: -100,
    },
    animate: {
      bottom: 20,
      transition: {
        bottom: { duration: 0.6, delay: isVisible ? 0.3 : 0.2 },
      },
    },
    exit: {
      bottom: -100,
    },
  };

  return (
    <AnimatePresence>
      {isVisible && routes.map(route => route.path).includes(pathName) && (
        <motion.div
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          variants={animationVariants}
          className={s.pageNavWrp}
        >
          <Segmented
            disabled={disabled}
            rootClassName={s.pageNav_backdropBlur}
            options={routes.map(route => route.name)}
            defaultSelected={selectedOption}
            onChange={followLink}
          >
            <Button onClick={() => setIsVisibleDiscussForm(!isVisibleDiscussForm)}>{t.common.buttonsLabel.discussProject}</Button>
          </Segmented>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageNav;
