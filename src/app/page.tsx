import { Metadata } from "next";
// import HomeOnePage from "./(homes)/home-1/page";
import HomeFourMain from "./(homes)/home-4/page";

export const metadata: Metadata = {
  title: "Let's Layout Studio",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
      {/* <HomeOnePage /> */}
    </>
  );
}
