'use client';
import s from './scrollable-segmented.module.scss';

import { FC, useRef, useState } from 'react';
import Segmented from '@/components/Common/Segmented';
import ArrowSvg from '@/components/Common/UI/svg/arrow';
import { m, AnimatePresence } from 'framer-motion';

interface IScrollableSegmentedControl {
  items: string[];
  defaultSelected: string;
  onChange?: (selectedOption: string) => void;
  disabled?: boolean;
}
const ScrollableSegmentedControl: FC<IScrollableSegmentedControl> = ({
  items,
  defaultSelected,
  onChange,
  disabled,
}) => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);
  const [showRightScrollButton, setShowRightScrollButton] = useState(true);

  const handleScroll = (scrollAmount: number) => {
    if (scrollableContainerRef.current) {
      const newScrollLeft = scrollableContainerRef.current.scrollLeft + scrollAmount;
      scrollableContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const checkScrollPos = (scrollLeft: number, scrollWidth: number, offsetWidth: number) => {
    const tolerance = 1; // Минимальный допустимый зазор

    if (scrollLeft <= tolerance) {
      setShowRightScrollButton(true);
    } else if (scrollLeft >= scrollWidth - offsetWidth - tolerance) {
      setShowRightScrollButton(false);
    }
  };

  const variantsLeft = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 0.4,
        },
        x: {
          duration: 0.2,
        },
      },
    },
    exit: {
      opacity: 0,
      x: -50,
    },
  };
  const variantsRight = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 0.4,
        },
        x: {
          duration: 0.2,
        },
      },
    },
    exit: {
      opacity: 0,
      x: 50,
    },
  };

  return (
    <div className={s.scrollableSegmented}>
      <AnimatePresence>
        {!showRightScrollButton && (
          <m.button
            variants={variantsLeft}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className={`${s.scrollButton} ${s.scrollButton_left}`}
            onClick={() => handleScroll(-150)}
          >
            <ArrowSvg />
          </m.button>
        )}
      </AnimatePresence>
      <div
        ref={scrollableContainerRef}
        className={s.scrollableSegmented__scrollContainer}
        onScroll={event =>
          checkScrollPos(
            event.currentTarget.scrollLeft,
            event.currentTarget.scrollWidth,
            event.currentTarget.offsetWidth
          )
        }
      >
        <Segmented
          disabled={disabled}
          rootClassName={s.scrollableItemsContainer}
          onChange={onChange}
          options={items}
          defaultSelected={defaultSelected}
        />
      </div>
      <AnimatePresence>
        {showRightScrollButton && (
          <m.button
            variants={variantsRight}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className={`${s.scrollButton} ${s.scrollButton_right}`}
            onClick={() => handleScroll(150)}
          >
            <ArrowSvg />
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollableSegmentedControl;
