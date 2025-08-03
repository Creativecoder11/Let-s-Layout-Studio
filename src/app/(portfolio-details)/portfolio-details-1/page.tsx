import React from "react";
import { Metadata } from "next";
import PortfolioDetailsOneMain from "@/pages/portfolio/details/portfolio-details-1-main";


export const metadata: Metadata = {
  title: "Let's Layout Studio - Portfolio Details 1 page",
};

const PortfolioDetailsOnePage = () => {
  return (
    <PortfolioDetailsOneMain/>
  );
};

export default PortfolioDetailsOnePage;
