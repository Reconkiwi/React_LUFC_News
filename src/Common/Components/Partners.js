import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";

import "../Styles/_Partners.scss";

const DEFAULT_CLASSNAME = "hero";

export default function HeroOverlay(partnersData) {
  const ParnersResult = partnersData.Partners;

  if (ParnersResult !== undefined) {
    const partnerItem = ParnersResult.homepagepartnersrepeater.map(
      (partner) => (
        <div className="partners__1" key={partner.id}>
          <img src={partner.partnersrepeaterimage.url} />
        </div>
      )
    );

    return (
      <div className="section-partners">
        <div className="container">
          <div className="partners__heading">
            <h3 className="section-headings">
              {/* {ParnersResult !== undefined ? ParnersResult.partners_header : ""} */}
              Partner
            </h3>
          </div>

          <div className="partners">{partnerItem}</div>
        </div>
      </div>
    );
  }
  return null;
}
