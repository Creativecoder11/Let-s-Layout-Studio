import React from "react";
import { Metadata } from "next";
import AccountMain from "@/pages/account/account-main";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Account page",
};

const AccountPage = () => {
  return (
    <AccountMain/>
  );
};

export default AccountPage;
