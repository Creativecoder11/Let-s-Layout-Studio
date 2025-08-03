"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import HeaderOne from "@/layouts/headers/header-one";
import FooterOne from "@/layouts/footers/footer-one";
import { perspective } from "@/utils/perspective-anim";
import PerspectivePortfolioSlider from "@/components/portfolio/slider/perspective-port-slider";
import ProjectTextLine from "@/components/project/project-text-line";
import BrandTwo from "@/components/brand/brand-two";
import FooterThree from "@/layouts/footers/footer-three";
import AwardOne from "@/components/award/award-one";
import TeamOne from "@/components/team/team-one";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import { videoAnimOne } from "@/utils/video-anim";
import ProjectOne from "@/components/project/project-one";
import ServiceOne from "@/components/service/service-one";
import ServiceTwo from "@/components/service/service-two";
import ServiceThree from "@/components/service/service-three";
import AboutOne from "@/components/about/about-one";
import AboutTwo from "@/components/about/about-two";
import AboutFour from "@/components/about/about-four";
import AboutMeArea from "@/components/about/about-me-area";
import AboutUsArea from "@/components/about/about-us-area";
import AboutUsHero from "@/components/about/about-us-hero";
import ServiceHero from "@/components/service/service-hero";
import ServiceFive from "@/components/service/service-five";
import ServiceSix from "@/components/service/service-six";
import AwardTwo from "@/components/award/award-two";

const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  useGSAP(() => {
    const timer = setTimeout(() => {
      perspective();
      revelAnimationOne();
    }, 100);
    return () => clearTimeout(timer);
  })

  useGSAP(() => {
    const timer = setTimeout(() => {
      videoAnimOne();
      // portfolio image wrap
      gsap.timeline({
        scrollTrigger: {
           trigger: ".tp-project-full-img-wrap",
           start: "top 65",
           end: "bottom 0%",
           pin: ".tp-project-full-img",
           pinSpacing: false,
        }
      });
      // team marquee
      teamMarqueAnim();
    }, 100)
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* service area start */}
            <ServiceOne />
            {/* service area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* brand area start */}
            {/* <BrandThree /> */}
            {/* brand area end */}

            {/* project area start */}
            {/* <ProjectFour /> */}
            {/* project area end */}

            {/* perspective area start */}
            <ProjectTextLine />
            <PerspectivePortfolioSlider />
            {/* perspective area end */}

            {/* video area start */}
            {/* <VideoThree /> */}
            {/* video area end */}
            
            {/* about area start */}
            <AboutFour />
            {/* about area end */}

            {/* award area */}
            <AwardOne />
            {/* award area */}

            {/* team area */}
            <TeamOne />
            {/* team area */}

            {/* brand area */}
            {/* <BrandTwo /> */}
            {/* brand area */}

            {/* contact area start */}
            {/* <ContactOne /> */}
            {/* contact area end */}

          </main>

          {/* footer area */}
          {/* <FooterOne /> */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
