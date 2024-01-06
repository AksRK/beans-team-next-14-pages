'use client';
import { FC, ReactNode } from 'react';
import s from './button.module.scss';
import { motion } from 'framer-motion';

interface IButton {
  children: ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'dark';
  onClick?: () => void;
  whileTapAnimation?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButton> = ({
  children,
  fullWidth = false,
  color = 'primary',
  onClick,
  whileTapAnimation = true,
  type = 'button',
}) => {
  const buttonColor = {
    primary: ` ${s.button_colorPrimary}`,
    dark: ` ${s.button_colorDark}`,
  };
  const buttonClassNames = [`${s.button} `, buttonColor[color], fullWidth ? ` ${s.button_fullWidth} ` : ''].join('');
  const whileTap = whileTapAnimation ? { scale: fullWidth ? 0.97 : 0.9 } : undefined;
  return (
    <motion.button type={type} onClick={onClick} whileTap={whileTap} className={buttonClassNames}>
      {children}
    </motion.button>
  );
};

export default Button;
