import s from './radio.module.scss';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface IPaymentTerm {
  name: string;
  price: string;
  description: string[];
}
interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  items: IPaymentTerm[];
  checkedItem: string | null;
}

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ id, items, checkedItem, ...props }, ref) => {
  return (
    <div className={s.radioPaymentsTermList} id={id}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${s.radioPaymentsTermItem} ${item.name === checkedItem ? s.radioPaymentsTermItem_checked : ''}`}
        >
          <label>{item.name}</label>
          <div className={s.radioPaymentsTermItem__price}>{item.price}</div>
          {item.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <input ref={ref} type="radio" value={item.name} {...props} checked={item.name === checkedItem} />
        </div>
      ))}
    </div>
  );
});

export default Radio;
