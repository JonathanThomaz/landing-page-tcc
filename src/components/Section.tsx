import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className = '', children }: SectionProps) => (
  <section id={id} className={className}>
    {children}
  </section>
);
