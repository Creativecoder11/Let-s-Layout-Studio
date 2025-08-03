import React from "react";
import { Metadata } from "next";
import AboutMeMain from "@/pages/about/about-me";

export const metadata: Metadata = {
  title: "Let's Layout Studio - About us",
};

const AboutMePage = () => {
  return (
    <AboutMeMain/>
  );
};

export default AboutMePage;
