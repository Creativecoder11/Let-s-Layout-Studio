import React from "react";
import { Metadata } from "next";
import ShopMain from "@/pages/shop/shop-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Shop page",
};

const ShopPage = () => {
  return (
    <ShopMain/>
  );
};

export default ShopPage;
