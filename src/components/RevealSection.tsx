import { ReactNode } from 'react';

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
};

const RevealSection = ({ children, className = '' }: RevealSectionProps) => {
  return <div className={`reveal-section ${className}`.trim()}>{children}</div>;
};

export default RevealSection;
