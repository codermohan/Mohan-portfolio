'use client';
import dynamic from 'next/dynamic';

const AnimationLottie = dynamic(() => import('./animation-lottie'), {
  ssr: false, // Disable server-side rendering
});

export default AnimationLottie;
