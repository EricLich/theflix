"use client";

import React from "react";

import type { TV } from "../utils/types";
import FeaturedSwiper from "./FeaturedSwiper";

type FeaturedShowsProps = {
  featuredShows: TV[];
};

const FeaturedShows: React.FC<FeaturedShowsProps> = ({ featuredShows }) => {
  return (
    <section className="w-[85%] mx-auto mt-[50px]">
      <FeaturedSwiper featuredItems={featuredShows} title={"Featured Shows this week"} mtNegative={false} />
    </section>
  );
};

export default FeaturedShows;
