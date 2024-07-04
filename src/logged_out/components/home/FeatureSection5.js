import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import withStyles from "@mui/styles/withStyles";
import classNames from "classnames";
import { Box, Hidden } from '@mui/material';

const styles = (theme) => ({
  containerSlide : {
    width: "450px",
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  containerSlideSm:{
    width: "350px",
    margin: "auto",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
})

const images = [
  {
    src:'images/feature5/openGrid.png',
    top:"23%",
    alt:"OpenGrid"
  },
  {
    src:'images/feature5/blc-css-karel.jpg',
    alt:"Karel"
  },
  {
    src:'images/feature5/blc-css-aselsan.png',
    alt:"Aselsan"
  },
  {
    src:'images/feature5/hib.png',
    top:"23%",
    alt:"hib"
  },
  {
    src:'images/feature5/htk.png',
    top:"23%",
    alt:"htk"
    },
  {
    src:'images/feature5/tesid.jpg',
    top:"23%",
    alt:"tesid"
  }
];

const Slideshow = (props) => {
  const { classes} = props;
    return (
      <div data-aos="zoom-in" data-aos-delay="100">
        <Hidden smDown>
          <Box className={classNames(classes.containerSlide)}>
            <Slide>
              {images.map((img, index) => <img key={index} alt={img.alt} style={{ width: "100%",marginTop:img.top }} src={img.src} />)}
            </Slide>
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box className={classNames(classes.containerSlideSm)}>
            <Slide>
              {images.map((img, index) => <img key={index} alt={img.alt} style={{ width: "100%",marginTop:img.top }} src={img.src} />)}
            </Slide>
          </Box>
        </Hidden>
      </div>
    )
}
export default withStyles(styles, { withTheme: true })(Slideshow);