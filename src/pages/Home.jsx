import React from "react";
import Cta from "./Cta";
import Furniture from "./Furniture";
import HeroArea from "./HeroArea";
import HotDetails from "./HotDetails";
import ProductReview from "./ProductReview";
import SearchFields from "./SearchFields";
import SearchItems from "./SearchItems";
import SpecialOffer from "./SpecialOffer";

const About = () => {



  return (
    <>
      <SearchFields />
      <HeroArea />
      <Cta />
      <HotDetails />
      <SearchItems/>
      <SpecialOffer/>
      <Furniture/>
      <ProductReview/>
      {/* <Footer /> */}
    </>
  );
};

export default About;
