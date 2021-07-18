import React from 'react';
import classNames from 'classnames';

import { snakeToCamelCase } from '../../../utils/string';

type Appearance =
  | 'default'
  | 'destructive'
  | 'white'
  | 'subtle'
  | 'disabled'
  | 'info'
  | 'alert'
  | 'warning'
  | 'success'
  | 'primary_lighter'
  | 'primary'
  | 'primary_dark'
  | 'alert_lighter'
  | 'alert_dark'
  | 'warning_lighter'
  | 'warning_dark'
  | 'success_lighter'
  | 'success_dark'
  | 'accent1'
  | 'accent1_lighter'
  | 'accent1_dark'
  | 'accent2'
  | 'accent2_lighter'
  | 'accent2_dark'
  | 'accent3'
  | 'accent3_lighter'
  | 'accent3_dark'
  | 'accent4'
  | 'accent4_lighter'
  | 'accent4_dark'
  | 'inverse';

type IconType = 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp'; // 'outline', 'rounded' to be deprecated soon.

interface IconProps {
  name?: string;
  size?: number;
  type?: IconType;
  className?: string;
  appearance?: Appearance;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Icon = (props: IconProps) => {
  const { appearance, className, name, size, onClick, children } = props;

  const mapper = (val: IconProps['type']) => {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  const type = mapper(props.type);

  const getIconAppearance = (iconColor: string) => {
    return snakeToCamelCase(iconColor);
  };

  const color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;

  const iconClass = classNames({
    ['material-icons']: true,
    [`material-icons=${mapper(type)}`]: type && type !== 'filled',
    ['icon']: true,
    [`icon--${color}`]: appearance,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  if (children && React.isValidElement(children)) {
    return (
      <span {...props} className={className}>
        {children}
      </span>
    );
  }

  return (
    <i {...props} className={iconClass} style={styles} onClick={onClick}>
      {type ? `${name}_${type}` : name}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'round',
};

export default Icon;
