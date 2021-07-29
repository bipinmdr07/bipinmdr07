import React from 'react';
import classNames from 'classnames';
import * as MaterialIcon from 'react-icons/md';
import * as AntIcon from 'react-icons/ai';

export type Name =
  | 'close'
  | 'facebook'
  | 'instagram'
  | 'menu'
  | 'home'
  | 'timeline'
  | 'phonelink'
  | 'assignment'
  | 'star';
type Appearance = 'default' | 'primary' | 'secondary';
type Size = 'tiny' | 'regular' | 'large';

type IconType = 'transparent' | 'filled' | 'outlined' | 'outline' | 'rounded' | 'round' | 'two-tone' | 'sharp'; // 'outline', 'rounded' to be deprecated soon.

interface IconProps {
  name: Name;
  size?: Size;
  type?: IconType;
  className?: string;
  appearance?: Appearance;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const Icon = (props: IconProps) => {
  const { appearance = 'default', className, type = 'transparent', name, size, onClick } = props;

  let SelectedIcon = <></>;

  switch (name) {
    case 'close':
      SelectedIcon = <MaterialIcon.MdClose />;
      break;
    case 'facebook':
      SelectedIcon = <AntIcon.AiFillFacebook />;
      break;
    case 'instagram':
      SelectedIcon = <AntIcon.AiFillInstagram />;
      break;
    case 'menu':
      SelectedIcon = <MaterialIcon.MdMenu />;
      break;
    case 'home':
      SelectedIcon = <MaterialIcon.MdHome />;
      break;
    case 'timeline':
      SelectedIcon = <MaterialIcon.MdTimeline />;
      break;
    case 'phonelink':
      SelectedIcon = <MaterialIcon.MdPhonelink />;
      break;
    case 'assignment':
      SelectedIcon = <MaterialIcon.MdAssignment />;
      break;
    case 'star':
      SelectedIcon = <MaterialIcon.MdStar />;
      break;
  }

  const iconClass = classNames({
    icon: true,
    [`icon--${type}`]: type,
    [`icon--${size}`]: size,
    [`${className}`]: className,
    [`icon--${appearance}`]: appearance,
  });

  /* if (children && React.isValidElement(children)) {
   *   return (
   *     <span {...props} className={className}>
   *       {children}
   *     </span>
   *   );
   * } */

  return (
    <i {...props} className={iconClass} onClick={onClick}>
      {SelectedIcon}
    </i>
  );
};

Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 'regular',
  type: 'round',
};

export default Icon;
