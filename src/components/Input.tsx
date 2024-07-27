import { InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      className={cn('block w-full border border-green-800 rounded p-3', className) }
      {...props}
    />
  );
}
export default Input;