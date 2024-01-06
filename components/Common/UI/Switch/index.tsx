import s from './switch.module.scss';
import { forwardRef, InputHTMLAttributes } from 'react';

interface ISwitch extends InputHTMLAttributes<HTMLInputElement> {}

const Switch = forwardRef<HTMLInputElement, ISwitch>(({ checked, ...props }, ref) => {
  return (
    <div className={`${s.switch} ${checked ? s.switch_checked : ''}`}>
      <div className={s.switch__mark} />
      <input {...props} type={'checkbox'} ref={ref} />
    </div>
  );
});

export default Switch;
