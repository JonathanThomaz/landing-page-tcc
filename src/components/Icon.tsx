interface IconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon = ({ name, className = '', style }: IconProps) => (
  <i className={`${name} ${className}`} style={style}></i>
);
