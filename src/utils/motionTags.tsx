'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const MotionImage = motion.create(Image);

export const MotionDiv = motion.create(motion.div);

export const MotionList = motion.create(motion.li);

export const MotionButton = motion.create(Button);
