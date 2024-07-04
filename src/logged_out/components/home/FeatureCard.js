import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import withStyles from "@mui/styles/withStyles";

const styles = (theme) => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
    width:"8%",
    [theme.breakpoints.down("md")]: {
      width:"15%",
    },
  },
});

// function shadeColor(hex, percent) {
//   const f = parseInt(hex.slice(1), 16);

//   const t = percent < 0 ? 0 : 255;

//   const p = percent < 0 ? percent * -1 : percent;

//   const R = f >> 16;

//   const G = (f >> 8) & 0x00ff;

//   const B = f & 0x0000ff;
//   return `#${(
//     0x1000000 +
//     (Math.round((t - R) * p) + R) * 0x10000 +
//     (Math.round((t - G) * p) + G) * 0x100 +
//     (Math.round((t - B) * p) + B)
//   )
//     .toString(16)
//     .slice(1)}`;
// }

function FeatureCard(props) {
  const { classes, Icon, color, headline, text } = props;
  return (
    <Fragment>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
        style={{
          color: "white",
          backgroundColor: "#F15A28",
          fill: color,
          padding: 5,
          marginRight:"2%"
        }}
      >
        {Icon}
      </div>
      <div style={{display:"flex", flexDirection:"column", textAlign:"left"}}>
        <Typography variant="h6" paragraph color="#33383b">
          {headline}
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{marginTop:"-5%"}}>
          {text}
        </Typography>
      </div>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(FeatureCard);