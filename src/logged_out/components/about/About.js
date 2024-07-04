import React, { useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import { Box, Typography, Grid, Hidden } from "@mui/material";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Environment from "./Environment";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
    wrapper: {
      width: "100%",
      [theme.breakpoints.up('xl')]: {
        paddingTop: `${theme.spacing(25)} !important`
      },
    },
    containerSlide : {
      width: "500px",
      margin: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
    },
    containerSlideSm:{
      width: "350px",
      margin: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    cont: {
      boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      display:"flex",
      marginBottom: theme.spacing(8),
      width: "100%",
    },
    cont2: {
      display:"flex",
      marginBottom: theme.spacing(8),
      width: "100%",
    },
    image2:{
      width: "92%",
      height: 380,
      paddingTop:"5%",
      paddingBottom:"5%",
      position: "relative",
      top: "50%",
      left: "50%",
      mozTransform: "translateX(-50%) translateY(-50%)",
      webkitTransform: "translateX(-50%) translateY(-50%)",
      transform:" translateX(-50%) translateY(-50%)",
    },
    square2:{
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      border:"2px solid #C0BFBF",
      borderRadius:"1px/50%",
      marginTop: "-5%",
      marginBottom: "-1%", 
      minHeight:"110%"
    },
    text: {
      position: "relative",
      marginRight:"25%",
      top: "50%",
      left: "50%",
      mozTransform: "translateX(-50%) translateY(-50%)",
      webkitTransform: "translateX(-50%) translateY(-50%)",
      transform:" translateX(-50%) translateY(-50%)",
    },
});

function About (props) {
  const { t } = useTranslation();

  const { selectAbout } = props;
  useEffect(() => {
    selectAbout();
  }, [selectAbout]);

  const { classes} = props;
  const itemData = [
    {
      img: './images/about/about1.png',
      title: 'about1',
    },
    {
      img: './images/about/about2.png',
      title: 'Birthday',
    },
    {
      img: './images/about/about5.jpg',
      title: 'about2',
    },
    {
      img: './images/about/about9.jpg',
      title: 'about9',
    },
    {
      img: './images/about/about3.jpg',
      title: 'Work',
    },
    {
      img: './images/about/about6.jpg',
      title: 'Aselsan',
    },
    {
      img: './images/about/about7.jpg',
      title: 'Founder',
    },
    {
      img: './images/about/about8.jpg',
      title: 'New Year',
    },
    {
      img: './images/about/about10.png',
      title: 'about10',
    },
    {
      img: './images/about/about11.png',
      title: 'about11',
    },
    {
      img: './images/about/about12.jpg',
      title: 'about12',
    },
  ];

  const itemData2 = [
    
    {
      img: './images/about2/biz-kimiz.jpeg',
      title: t("strong.company"),
    },
    {
      img: './images/about2/az-karbon.jpeg',
      title: t("az.karbon"),
    },
    {
      img: './images/about2/danismanlik.jpeg',
      title: t("danismanlik"),
    },
    {
      img: './images/about2/gelecegin-izinde.jpeg',
      title: t("gelecegin.izinde"),
    },
    {
      img: './images/about2/veriye-dayali.jpeg',
      title: t("veriye.dayali"),
    },
    {
      img: './images/about2/akilli-sehir.jpeg',
      title: t("akilli.sehir"),
    },
  ];

    return(
      <div className={classNames("lg-p-top", classes.wrapper)}>
          <div style={{marginTop: "-5%",marginBottom:"3%"}} data-aos="zoom-in" data-aos-delay="50">
            <Box display="flex" justifyContent="center" className="row">
              <Typography variant="h5" fontWeight={500} color="#33383b"  textAlign="center">
                {t("dynamic.company")}
              </Typography>
            </Box>
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <Hidden mdDown>
                    <frame className={classNames(classes.square2)}>
                      <img alt="" src={itemData2[0].img} className={classNames(classes.image2)}/>
                    </frame>
                  </Hidden>
                  <Hidden mdUp>
                      <img alt="" src={itemData2[0].img} className={classNames(classes.image2)}/>
                  </Hidden>
                </Box>
              </Grid>
              <Grid item textAlign="center" xs={12} md={6} lg={6} data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[0].title}</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Hidden mdDown>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[1].title}</Typography>
              </Grid>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <frame className={classNames(classes.square2)}>
                    <img alt="" src={itemData2[1].img} className={classNames(classes.image2)}/>
                  </frame>
                </Box>
              </Grid>
              </Hidden>
              <Hidden mdUp>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <img alt="" src={itemData2[1].img} className={classNames(classes.image2)}/>
                </Box>
              </Grid>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[1].title}</Typography>
              </Grid>
              </Hidden>
            </Grid>
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <Hidden mdDown>
                    <frame className={classNames(classes.square2)}>
                      <img alt="" src={itemData2[2].img} className={classNames(classes.image2)}/>
                    </frame>
                  </Hidden>
                  <Hidden mdUp>
                      <img alt="" src={itemData2[2].img} className={classNames(classes.image2)}/>
                  </Hidden>
                </Box>
              </Grid>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[2].title}</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Hidden mdDown>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[3].title}</Typography>
              </Grid>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <frame className={classNames(classes.square2)}>
                    <img alt="" src={itemData2[3].img} className={classNames(classes.image2)}/>
                  </frame> 
                  
                </Box>
              </Grid>
              </Hidden>
              <Hidden mdUp>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <img alt="" src={itemData2[3].img} className={classNames(classes.image2)}/>
                </Box>
              </Grid>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[3].title}</Typography>
              </Grid>
              </Hidden>
            </Grid>
           
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <Hidden mdDown>
                    <frame className={classNames(classes.square2)}>
                      <img alt="" src={itemData2[4].img} className={classNames(classes.image2)}/>
                    </frame>
                  </Hidden>
                  <Hidden mdUp>
                      <img alt="" src={itemData2[4].img} className={classNames(classes.image2)}/>
                  </Hidden>
                </Box>
              </Grid>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[4].title}</Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classNames( classes.cont)}>
            <Grid container>
              <Hidden mdDown>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[5].title}</Typography>
              </Grid>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <frame className={classNames(classes.square2)}>
                    <img alt="" src={itemData2[5].img} className={classNames(classes.image2)}/>
                  </frame>
                </Box>
              </Grid>
              </Hidden>
              <Hidden mdUp>
              <Grid justifyContent="center" xs={12} md={6} lg={6} item container data-aos="zoom-in" data-aos-delay="50">
                <Box justifyContent="center">
                  <img alt="" src={itemData2[5].img} className={classNames(classes.image2)}/>
                </Box>
              </Grid>
              <Grid textAlign="center" xs={12} md={6} lg={6} item data-aos="zoom-in" data-aos-delay="50">
                <Typography className={classNames(classes.text)} variant="body1" color="#33383b">{itemData2[5].title}</Typography>
              </Grid>
              </Hidden>
            </Grid>
          </div>
          <Environment/>
          <div style={{marginTop: "-2%", marginBottom: "5%"}} data-aos="zoom-in" data-aos-delay="50">
              <Typography variant="h4"style={{color:"#33383b",fontSize:"200%",marginTop:"5%", marginBottom:"-2%", textAlign:"center"}}>
                {t("Communication for a Better LIFE")}
              </Typography>
          </div>
          <div data-aos="zoom-in" data-aos-delay="50">
              <Typography variant="h5" fontWeight={900} style={{color:"#33383b", textAlign:"center"}}>{t("daily.moments")}</Typography>
          </div>
          <div style={{marginBottom:"0%"}} className={classNames( classes.cont2)} data-aos="zoom-in" data-aos-delay="100">
            <Hidden smDown>
              <Box className={classNames( classes.containerSlide)}>
                <Slide>
                  {itemData.map((fadeImage,index) => (
                        <img key={index} alt="" src={fadeImage.img} style={{width:"100%"}}/>
                  ))}
                </Slide>
              </Box>
            </Hidden>
            <Hidden smUp>
              <Box className={classNames( classes.containerSlideSm)}>
                <Slide>
                  {itemData.map((fadeImage,index) => (
                        <img key={index} alt="" src={fadeImage.img} style={{width:"100%"}}/>
                  ))}
                </Slide>
              </Box>
            </Hidden>
        </div>
      </div>
    )
};



About.propTypes = {
    classes: PropTypes.object,
    theme: PropTypes.object,
    selectAbout: PropTypes.func.isRequired,
  };

  export default withStyles(styles, { withTheme: true })(About);