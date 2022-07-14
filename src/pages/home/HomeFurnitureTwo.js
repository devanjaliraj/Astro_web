import React from "react";
import HeroSliderTwentyEight from "../../wrappers/hero-slider/HeroSliderTwentyEight";
// import FirstSectiontwo from "../../wrappers/content-home/FirstSectiontwo";
// import FirstSectiontree from "../../wrappers/content-home/FirstSectiontree";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";

// import SecondSection from "../../wrappers/content-home/SecondSection";
// import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import LayoutOne from "../../layouts/LayoutOne";
// import CategoryTwoSlider from "../../wrappers/category/CategoryTwoSlider";
// import TabProductSix from "../../wrappers/product/TabProductSix";
// import FirstSection from "../../wrappers/content-home/FirstSection";
// import AnimateSection from "../../wrappers/content-home/AnimateSection";
// import ThirdSection from "../../wrappers/content-home/ThirdSection";
// import FourthSection from "../../wrappers/content-home/FourthSection";
// import MapSection from "../../wrappers/content-home/MapSection";
// import FifthSection from "../../wrappers/content-home/FifthSection";
import HomeCategory from "../../components/astrology/homecategory"
import OurWorkFlow from "../../components/astrology/ourworkflow"


const HomeFurnitureTwo = () => {
  return (
    <LayoutOne headerTop="visible">
      {/* hero slider */}
      <HeroSliderTwentyEight />
      {/* First Section */}

      <OurWorkFlow />
      {/* Second section */}

      <HomeCategory />
      {/* third section */}

      {/* <FirstSectiontwo /> */}
      {/* Second Store */}

      {/* <FirstSectiontree /> */}
      <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />
      {/* Product slider */}
      {/* <SecondSection /> */}
      {/* Browse by category */}
      {/* <ByCategory /> */}
      {/* newsletter */}
      {/* <NewsletterTwo spaceBottomClass="pb-100" /> */}
    </LayoutOne>
  );
};

export default HomeFurnitureTwo;
