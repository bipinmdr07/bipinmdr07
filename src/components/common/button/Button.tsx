import React from 'react';
import classNames from 'classnames';
import Spinner from '../spinner';

type Size = 'tiny' | 'regular' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';
type Appearance = 'basic' | 'primary' | 'secondary' | 'transparent';

interface ButtonProps {
  size?: Size;
  icon?: string;
  type?: ButtonType;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  appearance?: Appearance;
  iconAlign?: 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    icon,
    onClick,
    loading,
    children,
    disabled,
    className,
    type = 'button',
    size = 'regular',
    iconAlign = 'left',
    appearance = 'basic',
    ...rest
  } = props;

  const buttonClass = classNames({
    btn: true,
    [`btn--${size}`]: size,
    [`btn--${size}Square`]: !children,
    [`btn--${appearance}`]: appearance,
    [`btn--iconAlign=${iconAlign}`]: children && iconAlign,
    [`${className}`]: className,
  });

  return (
    <button type={type} onClick={onClick} className={buttonClass} disabled={disabled || loading} {...rest}>
      {loading ? (
        <div style={{ display: 'flex' }}>
          {children}
          <div style={{ marginLeft: '16px' }}>
            <Spinner size="tiny"></Spinner>
          </div>
        </div>
      ) : (
        <>
          {/* {icon && <Icon></Icon>} */}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
