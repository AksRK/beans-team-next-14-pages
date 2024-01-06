import { FC, ReactNode } from 'react';
import { geometriaMedium } from '@/core/fonts/Geometria';
import s from './title.module.scss'

interface ITitle {
  children: ReactNode;
  className?: string;
  color?: 'white';
}

const Title: FC<ITitle> = ({ children, className, color }) => {
  const colors = {
    white: ` ${s.title_white}`,
  };
  return (
    <h2 className={`${s.title} ${color ? colors[color] : ''} ${geometriaMedium.className} ${className ? className : ''}`}>
      {children}
    </h2>
  );
};

export default Title;
