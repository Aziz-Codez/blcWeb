import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, Hidden, Link } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ProductsCard from "./ProductsCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import "./products.css";

const styles = (theme) => ({
  productContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: "92%",
    width: "100%",
  },
  productContentWrapper2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: "95%",
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
    [theme.breakpoints.up('xl')]: {
      paddingTop: `${theme.spacing(25)} !important`
    },
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  workingAreasDiv: {
    marginTop:"-5%", 
    marginBottom:"6%", 
    textAlign:"center", 
    position: "relative"
  }
});

function getVerticalProductPosts(isWidthUpSm, isWidthUpMd, productPosts) {
  const { t } = useTranslation();
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUpMd) {
    rows = 1;
    xs = 12;
  } else if (isWidthUpSm) {
    rows = 1;
    xs = 12;
  } else {
    rows = 1;
    xs = 12;
  }
  productPosts.forEach((productPosts, index) => {
    gridRows[index % rows].push(
      <Grid key={productPosts.id} item xs={12}> 
        <Box mb={3}>
          <ProductsCard
            src={productPosts.src}
            title={productPosts.title}
            snippet={t(productPosts.snippet)}
            url={productPosts.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Product(props) {
  const { classes, productPosts, selectProduct, theme } = props;

  const { t } = useTranslation();

  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    selectProduct();
  }, [selectProduct]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.workingAreasDiv}>
        <img className="working-areas-img" src="/images/working-areas.png" alt=""/>
        <div className="center-text"> {t("Product.Areas.areas")} </div>

        <Link className="text-data-center" href="/product/blc-platform-paas" underline="hover"> {t("Product.Areas.datacenter")} </Link>
        <Link className="text-bit" href="/product/better-life-it-services-saas" underline="hover"> {t("Product.Areas.bit")} </Link>
        <Link className="text-task" href="/product/blc-task-tracking-system" underline="hover"> {t("Product.Areas.task")} </Link>
        <Link className="text-iot" underline="hover"> {t("Product.Areas.iot")} </Link>
        <Link className="text-artificial" href="/r&d" underline="hover"> {t("Product.Areas.artificial")} </Link>

        <Link className="button-data-center" href="/product/blc-platform-paas" underline="hover">B'Cloud</Link>
        <Link className="button-bit" href="/product/better-life-it-services-saas" underline="hover">B'IT</Link>
        <Link className="button-task" href="/product/blc-task-tracking-system" underline="hover">B'Monit</Link>
        <Link className="button-iot" underline="hover">B'IoT</Link>
        <Link className="button-artificial" href="/r&d" underline="hover">B'Energy</Link>
      </div>
      <Hidden mdDown>
        <div className={classes.productContentWrapper2}>
          <Grid container spacing={3}>
            {getVerticalProductPosts(isWidthUpSm, isWidthUpMd, productPosts)}
          </Grid>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.productContentWrapper}>
          <Grid container spacing={3}>
            {getVerticalProductPosts(isWidthUpSm, isWidthUpMd, productPosts)}
          </Grid>
        </div>
      </Hidden>
    </Box>
  );
}

Product.propTypes = {
  selectProduct: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  productPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles, { withTheme: true })(Product);
