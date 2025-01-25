import React from "react";
import Comparison from "../Comparison/Comparison";
import Upcoming from "../Upcoming/Upcoming";
import ProductNews from "../ProductNews/ProductNews";
import LatestMobile from "../LatestMobile/LatestMobile";
import Review from "../Review/Review";
import LatestCOmparison from "../LatestComparison/LatestCOmparison";

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Comparison></Comparison>
      <Upcoming></Upcoming>
      <ProductNews></ProductNews>
      <LatestMobile></LatestMobile>
      <Review></Review>
      <Upcoming></Upcoming>
      <LatestCOmparison></LatestCOmparison>
    </div>
  );
};

export default Homepage;
