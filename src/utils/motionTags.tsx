'use client';

import { Button } from '@/components/ui/button';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, FC } from 'react';

interface MotionDivProps extends MotionProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const MotionImage = motion.create(Image);

export const MotionDiv: FC<MotionDivProps> = ({ children, ...props }) => <motion.div {...props}>{children}</motion.div>;

export const MotionList = motion.create(motion.li);

export const MotionButton = motion.create(Button);
