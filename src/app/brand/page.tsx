import React from "react";
import { Metadata } from "next";
import BrandMain from "@/pages/brand/brand-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Brand page",
};

const BrandPage = () => {
  return (
    <BrandMain/>
  );
};

export default BrandPage;
