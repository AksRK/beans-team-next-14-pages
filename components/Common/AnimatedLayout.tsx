import { FC, ReactNode, useContext, useEffect, useRef } from 'react';
import { m, motion, AnimatePresence, useInView, LazyMotion, domAnimation, useWillChange } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { PageTransitionContext } from '@/components/Common/Contexts/PageTransition';
import Header from '@/components/Common/UI/Header';
import Footer from './UI/Footer';
import PageNav from '@/components/Common/PageNav';
import DiscussFormModal from '@/components/Common/DiscussFormModal';
import ModalContainer from '@/components/Common/UI/ModalContainer';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TCommonDictionary } from '@/core/lib/i18n';

interface IAnimatedLayout {
  children: ReactNode;
}
const AnimatedLayout: FC<IAnimatedLayout> = ({ children }) => {
  const {t} = usePageTranslation<TCommonDictionary>(DictionaryKey.Common)
  const { isAnimationPlay, setIsAnimationPlay } = useContext(PageTransitionContext);
  const footerRef = useRef<HTMLDivElement>(null);
  const pageWrpRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const markInView = useInView(markRef);
  const pathName = usePathname();
  const willChange = useWillChange();
  const animatedRoutes = ['/', '/solutions', '/about-team']

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathName]);

  useEffect(() => {
    const body = document.querySelector('body');

    if (body && isAnimationPlay) {
      body.style.overflow = 'hidden';
      body.style.height = '100vh';
    }
    if (body && !isAnimationPlay) {
      body.style.overflow = 'visible';
      body.style.height = 'auto';
    }
  }, [isAnimationPlay]);

  const variants = {
    initial: {
      y: '100vh',
      borderRadius: '30px',
    },
    animate: {
      y: 0,
      borderRadius: 0,
      transition: {
        borderRadius: {
          duration: 0.2,
          delay: 0.7,
        },
        y: { duration: 0.3, delay: 0.4 },
      },
    },
    exit: {
      origin: '-50%',
      opacity: 0.5,
      scale: 0.9,
      maxHeight: '50vh',
      overflow: 'hidden',
      borderRadius: '30px',
      transition: {
        duration: 0.8,
        scale: {
          duration: 0.3,
        },
        borderRadius: { duration: 0.1 },
        opacity: {
          duration: 0.5,
        },
      },
    },
  };

  const closeFooter = () => {
    const currentPosition = window.scrollY || window.pageYOffset;
    window.scroll({
      top: currentPosition - 50,
      left: 0,
      behavior: 'smooth' // Добавляем плавность
    });
  }

  return (
    <>
      <div
        id={'page'}
        ref={pageWrpRef}
        className={`page-wrp ${markInView && !isAnimationPlay ? 'page-wrp--view-footer' : ''}`}
      >
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode={'popLayout'}>
            {animatedRoutes.includes(pathName) ? (
              <m.main
                key={pathName}
                variants={variants}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
                style={{ willChange }}
                className={`main`}
                onAnimationStart={() => setIsAnimationPlay(true)}
                onAnimationComplete={() => {
                  setTimeout(() => {
                    setIsAnimationPlay(false);
                  }, 100);
                }}
              >
                <Header />
                {children}
              </m.main>
            ) : (
              <main className={'main'}>
                <Header />
                {children}
              </main>
            )}
          </AnimatePresence>
        </LazyMotion>
        <AnimatePresence>
          {markInView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={'page-blackout'}
              onClick={() => closeFooter()}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <div ref={markRef} className={'page-wrp-mark'}></div>
      <Footer ref={footerRef} isVisible={markInView} />
      <PageNav isVisible={!markInView} disabled={isAnimationPlay} />
      <DiscussFormModal />
      <ModalContainer />
    </>
  );
};

export default AnimatedLayout;
