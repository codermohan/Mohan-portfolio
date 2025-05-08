'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// ✅ Dynamically import lottie-react only on client side
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  const style = {
    width,
  };

  return <Lottie animationData={animationPath} loop={true} autoplay={true} style={style} />;
};

export default AnimationLottie;





/*




"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;

*/