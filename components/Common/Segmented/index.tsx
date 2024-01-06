'use client';
import s from './segmented.module.scss';
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import useWindowSize from '@/core/hooks/UseWindowSize';

interface ISegmented {
  options: string[];
  defaultSelected: string;
  onChange?: (selectedOption: string) => void;
  children?: ReactNode;
  rootClassName?: string;
  disabled?: boolean;
}
const Segmented: FC<ISegmented> = ({ options, defaultSelected, onChange, children, rootClassName, disabled }) => {
  const { width, height } = useWindowSize();
  const [checked, setChecked] = useState<string>(defaultSelected);
  const segmentedRef = useRef<HTMLDivElement | null>(null);
  const [markStyles, setMarkStyles] = useState<CSSProperties>({ top: 3, left: 3, width: 0, height: 0 });

  useEffect(() => {
    updateActiveItemStyles(options.indexOf(defaultSelected));
    setChecked(defaultSelected);
  }, [defaultSelected, width, height]);

  const updateActiveItemStyles = (index: number) => {
    if (segmentedRef.current) {
      const element = segmentedRef.current?.children[index + 1];
      const segmentedRect = segmentedRef.current.getBoundingClientRect();

      if (element) {
        const elementRect = element.getBoundingClientRect();
        const relativeLeft = elementRect.left - segmentedRect.left;
        const relativeTop = elementRect.top - segmentedRect.top;
        setMarkStyles({ top: relativeTop, left: relativeLeft, width: elementRect.width, height: elementRect.height });
      }
    }
  };

  const handleSelectItem = (value: string, index: number) => {
    if (!disabled) {
      setChecked(value);
      updateActiveItemStyles(index);
      if (onChange) {
        onChange(value);
      }
    }
  };

  return (
    <div className={`${s.segmented} ${rootClassName ? rootClassName : ''}`} ref={segmentedRef}>
      <div className={s.segmented__mark} style={markStyles}></div>
      {options.map((option, index) => {
        return (
          <div
            key={'segmented_option_' + index}
            className={`${s.segmented__item} ${checked === option ? s.segmented__item_active : ''}`}
            onClick={() => handleSelectItem(option, index)}
          >
            {option}
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default Segmented;
