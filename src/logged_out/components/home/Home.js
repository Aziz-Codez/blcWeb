import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import FeatureSection5 from "./FeatureSection5";
import SectionHead from "./SectionHead";
import Section3 from "./Section3";
import Section2 from "./Section2";
import SocialMedia from "./Section4";
import Section5 from "./Section5";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <SectionHead />
      <Section2 />
      <Section3 />
      <SocialMedia/>
      <FeatureSection5 />
      <Section5 />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
