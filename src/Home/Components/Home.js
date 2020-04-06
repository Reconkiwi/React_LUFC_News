import React, { useState, useEffect } from "react";

import HeroVideo from "../../Common/Components/HeroVideo";
import HeroOverlay from "../../Common/Components/HeroOverlay";
import RecentNews from "../../Common/Components/RecentNews";
import About from "../../Common/Components/About";
import Highlights from "../../Common/Components/Highlights";
import Products from "../../Common/Components/Products";
import Partners from "../../Common/Components/Partners";
import Footer from "../../Common/Components/Footer";

import { Segment } from "semantic-ui-react";

export default function Home() {
  const [data, setData] = useState([]);
  const [homeData, setHomeData] = useState([]);

  const dataIsLoaded =
    data !== undefined && homeData.acf !== undefined ? true : false;

  useEffect(() => {
    function getACFData() {
      fetch("http://localhost:8888/lufcACFstuff/wp-json/acf/v3/pages/2")
        .then((response) => response.json())
        .then((homeData) => setHomeData(homeData));

      console.log(homeData);
    }
    function getWordpressPosts() {
      fetch("http://localhost:8888/lufcACFstuff/wp-json/wp/v2/posts?_embed")
        .then((response) => response.json())
        .then((data) => setData(data));

      console.log(data);
    }
    getACFData();
    getWordpressPosts();
  }, [dataIsLoaded]);

  return (
    <Segment>
      <HeroVideo />
      <HeroOverlay />
      <RecentNews RecentNews={data} />
      {/* <About AboutInfo={homeData.acf} /> */}
      <Highlights />
      <Products Products={homeData.acf} />
      <Partners Partners={homeData.acf} />
      <Footer />
    </Segment>
  );
}
