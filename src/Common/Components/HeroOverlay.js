import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Logo from "../../Images/Common/lufc-logo-lg.png";

import "../Styles/_HeroOverlay.scss";

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay() {
  const [data, setData] = useState([]);
  const dataIsLoaded = data.acf !== undefined ? true : false;

  useEffect(() => {
    function getData() {
      fetch("http://localhost:8888/lufcACFstuff/wp-json/acf/v3/pages/2")
        .then(response => response.json())
        .then(data => setData(data));

      console.log(data);
    }
    getData();
  }, [dataIsLoaded]);

  return (
    <Grid className={DEFAULT_CLASSNAME}>
      <Grid.Row>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__header`} width={1}>
          <h2 className={`${DEFAULT_CLASSNAME}__header-title`}>
            {data.acf !== undefined ? data.acf.homepageHeader : ""}
          </h2>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}>Hello</Grid.Column>
        <Grid.Column className={`${DEFAULT_CLASSNAME}__logo-img`} width={1}>
          <img
            src={data.acf !== undefined ? data.acf.heroLogo.url : ""}
            alt="LUFC logo"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
