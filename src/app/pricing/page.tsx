import React from "react";
import { Metadata } from "next";
import PricingMain from "@/pages/pricing/pricing-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Pricing page",
};

const PricingPage = () => {
  return (
    <PricingMain/>
  );
};

export default PricingPage;
