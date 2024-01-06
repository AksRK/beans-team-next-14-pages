import s from './form-item.module.scss';
import React, { CSSProperties, FC } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface IFormItemProps {
  name: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  rules?: RegisterOptions;
  errors?: FieldErrors<FieldValues>;
  className?: string;
  styles?: CSSProperties;
  children: React.ReactElement;
}

const FormItem: FC<IFormItemProps> = ({ name, label, register, rules, errors, children, className, styles }) => {
  const fieldError = errors && errors[name];

  const childProps = {
    id: name,
    ...register(name, rules),
  };

  return (
    <div className={`${s.formItem} ${className ? className : ''}`} style={styles}>
      {label && (
        <label className={`${s.formLabel} ${fieldError ? s.formLabel_error : ''}`} htmlFor={name}>
          {label}
        </label>
      )}
      {React.cloneElement(children, childProps)}
      {fieldError && <div className={s.formItem__errorMessage}>{fieldError?.message as string}</div>}
    </div>
  );
};

export default FormItem;
