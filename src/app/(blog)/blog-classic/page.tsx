import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/pages/blog/blog-classic";

export const metadata: Metadata = {
  title: "Let's Layout Studio - Blog Classic",
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
