'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const MotionImage = motion(Image);

export const MotionDiv = motion(motion.div);

export const MotionList = motion(motion.li);
