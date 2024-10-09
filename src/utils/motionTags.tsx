'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const MotionImage = motion(Image);

export const MotionDiv = motion(motion.div);

export const MotionList = motion(motion.li);

export const MotionButton = motion(Button);