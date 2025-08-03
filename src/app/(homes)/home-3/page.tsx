import React from 'react';
import { Metadata } from 'next';
import HomeThreeMain from '@/pages/homes/home-3';

export const metadata: Metadata = {
  title: "Let's Layout Studio - Home Three Page",
};

const HomePageThree = () => {
  return (
    <HomeThreeMain/>
  );
};

export default HomePageThree;