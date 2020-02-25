import React from "react";

import HomePosts from "./HomePosts";
import Navbar from "../../Common/Components/Navbar";
import { Segment } from "semantic-ui-react";

export default function DataLoader() {
  return (
    <Segment>
      <Navbar />
      <HomePosts />
    </Segment>
  );
}
