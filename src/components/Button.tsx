import { ButtonHTMLAttributes } from 'react';

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className="mt-6 bg-green-800 text-white font-bold w-full p-3 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;