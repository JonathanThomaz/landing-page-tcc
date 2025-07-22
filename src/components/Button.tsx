import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export const Button = ({ href, className = 'btn btn-primary btn-lg', children }: ButtonProps) => (
  <a href={href} className={className}>
    {children}
  </a>
);
