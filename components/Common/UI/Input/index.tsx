import s from './input.module.scss';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface IInputsProps {
  error?: boolean;
  className?: string;
}
interface IInput extends InputHTMLAttributes<HTMLInputElement>, IInputsProps {}
interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement>, IInputsProps {}

const Input = forwardRef<HTMLInputElement, IInput>(({ error, className, ...props }, ref) => {
  return <input className={`${s.input} ${error ? s.input_error : ''} ${className}`} {...props} type={'text'} ref={ref} />;
});

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(({ error, className, ...props }, ref) => {
  return (
    <textarea ref={ref} className={`${s.input} ${s.input_textArea} ${error ? s.input_error : ''} ${className}`} {...props} />
  );
});

export { Input, TextArea };
