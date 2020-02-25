import React from "react";
import { Grid } from "semantic-ui-react";
import Logo from "../../Images/Common/header-logo.png";

const DEFAULT_CLASSNAME = "navbar";

export default function Navbar() {
  return (
    <Grid columns={7} className={DEFAULT_CLASSNAME}>
      <Grid.Column>NEWS</Grid.Column>
      <Grid.Column>ABOUT</Grid.Column>
      <Grid.Column>LUFC ZONE</Grid.Column>
      <Grid.Column>
        <img src={Logo} className={`${DEFAULT_CLASSNAME}__logo`} />
      </Grid.Column>
      <Grid.Column>LUFC LIVE</Grid.Column>
      <Grid.Column>MERCH</Grid.Column>
      <Grid.Column>CONTACT</Grid.Column>
    </Grid>
  );
}
