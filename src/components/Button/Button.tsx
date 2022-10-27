import {
  ReactNode,
  ButtonHTMLAttributes,
  FC,
} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FC<Props> = ({
  children,
  className,
  ...props
}) => (
  <button
    type="button"
    className={`button ${className}`}
    {...props}
  >
    {children}
  </button>
);
