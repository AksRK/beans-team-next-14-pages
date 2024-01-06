import s from './radio.module.scss';
import { forwardRef, InputHTMLAttributes } from 'react';
interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  items: string[];
  checkedItem: string | null;
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ id, items, checkedItem, ...props }, ref) => {
  return (
    <div className={s.radioList} id={id}>
      {items.map((item, index) => (
        <div key={index} className={`${s.radioItem} ${item === checkedItem ? s.radioItem_checked : ''}`}>
          <label>{item}</label>
          <input ref={ref} type="radio" value={item} {...props} checked={item === checkedItem} />
        </div>
      ))}
    </div>
  );
});

export default Radio;
