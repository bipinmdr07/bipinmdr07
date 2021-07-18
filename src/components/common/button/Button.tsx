import React from 'react';
import classNames from 'classnames';
import Icon from '../icon/Icon';
import Spinner from '../spinner';

type Size = 'tiny' | 'regular' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';
type Appearance = 'basic' | 'primary' | 'secondary' | 'cancel' | 'transparent';

interface ButtonProps {
  size?: Size;
  icon?: string;
  type?: ButtonType;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: string;
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
    ['btn']: true,
    [`btn--${size}`]: size,
    [`btn--${size}Square`]: !children,
    [`btn--${appearance}`]: appearance,
    [`btn--iconAlign=${iconAlign}`]: children && iconAlign,
    [`${className}`]: className,
  });

  const iconClass = classNames({
    ['btn-icon']: true,
    [`btn-icon--${iconAlign}`]: children && iconAlign,
  });

  const spinnerClass = classNames({
    ['disabled']: disabled,
    ['default']: ['basic', 'transparent'].includes(appearance),
    ['white']: !['basic', 'transparent'].includes(appearance),
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
          {icon && <Icon></Icon>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
