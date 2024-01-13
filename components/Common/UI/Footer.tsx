'use client';
import Image from 'next/image';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { founder_1 } from '@/core/constants/founders';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TCommonDictionary } from '@/core/lib/i18n';

interface IFooterProps {
  isVisible: boolean;
}

const Footer = forwardRef<HTMLDivElement, IFooterProps>(({ isVisible }, forwardedRef) => {
  const {t} = usePageTranslation<TCommonDictionary>(DictionaryKey.Common)
  return (
    <>
      <div className={'footer-wrp'}>
        <div className={'large-container'}>
          <motion.footer
            ref={forwardedRef}
            animate={isVisible ? { y: 0 } : { y: 200 }}
            transition={{ duration: 0.3 }}
            className={'footer'}
          >
            <div className={'founders-help'}>
              <div className={'founders-help__image'}>
                <Image
                  src={founder_1.imagePath}
                  alt={'123'}
                  fill={true}
                  sizes={'(max-width: 576px) 100vw,'}
                  quality={100}
                />
              </div>
              <div className={'founders-help__text'}>
                <span>{t.common.common.helpDecision}</span>
                <a target={'_blank'} rel={'noreferrer'} href={founder_1.telegram}>
                  {t.common.buttonsLabel.writeTelegram}
                </a>
              </div>
            </div>
            <div style={{ flex: '0 0 1' }}>2018 → {new Date().getFullYear()}</div>
          </motion.footer>
        </div>
      </div>
    </>
  );
});

export default Footer;
