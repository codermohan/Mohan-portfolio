'use client';

import React from 'react';
import AnimationLottie from '../helper/animation-lottie';

const ClientOnlyLottieSection = () => {
  return (
    <div className="my-10">
      <AnimationLottie />
    </div>
  );
};

export default ClientOnlyLottieSection;


/*

'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/utils/lottie/hero.json'; // Adjust path if needed

const ClientOnlyLottieSection = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default ClientOnlyLottieSection;
*/