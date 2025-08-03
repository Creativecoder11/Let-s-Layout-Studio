import React from 'react';
import { Metadata } from 'next';
import HomeTwoMain from '@/pages/homes/home-2';

export const metadata: Metadata = {
  title: "Let's Layout Studio - Home Two Page",
};

const HomePageTwo = () => {
  return (
    <HomeTwoMain/>
  );
};

export default HomePageTwo;