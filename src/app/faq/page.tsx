import React from "react";
import { Metadata } from "next";
import FaqMain from "@/pages/faq/faq-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Faq page",
};

const FaqPage = () => {
  return (
    <FaqMain/>
  );
};

export default FaqPage;
