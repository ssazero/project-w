import React from "react";

import "./Logo.scss";
import logoText from "../../assets/images/logo-text.png";
import logoSmall from "../../assets/images/logo-small.png";

const logo = props => {
  let logoUrl = logoText;
  let additionalStyles = {padding: "1rem 0"};
  let logoClasses = ["logo__image"];

  if (props.small) {
    logoUrl = logoSmall;
    additionalStyles = {padding: ".2rem 0", marginLeft: "3rem"};
    logoClasses.push("logo__image--phone");
  }

  return (
    <div className="logo">
      <img className={logoClasses.join(" ")} style={additionalStyles} src={logoUrl} alt="Logo" />
    </div>
  );
};

export default logo;
