import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "Let's Layout Studio - About Us",
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
