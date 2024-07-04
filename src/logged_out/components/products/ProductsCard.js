import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Typography, Card, Box, Hidden, Grid} from "@mui/material";
import { useTranslation } from "react-i18next";
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
  img: {
    width: "100%",
    height: 250,
    marginBottom: 8,
  },
  img2: {
    width: 500,
    height: "auto",
    marginBottom: 10,
    marginTop:10,
    borderRadius:"10px",
  },
  card: {
    boxShadow: theme.shadows[3],
  },
  card2: {
    display: "flex", 
    flexDirection: "row",
    alignItems: "center",
    borderRadius:"20px",
    boxShadow: theme.shadows[3],
    minHeight: "45vh",
    marginBottom:"5%"
  },
  box2:{
    flexDirection: "column", 
    textAlign: "center",
    maxWidth: "80%", 
    marginLeft: "5%"
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    "&:active": {
      color: theme.palette.primary.dark,
    },
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark,
    },
  },
});

function ProductsCard(props) {
  const { classes, url, src, title, snippet } = props;
  const { t } = useTranslation();

  return (
    <>
    <Hidden mdDown>
      <Card className={classes.card2}>
        <Grid item lg={6} style={{textAlign:"right", justifyContent:"right" }}>
          {src && (
            <Link to={url} tabIndex={-1}>
              <img src={src} className={classes.img2} alt="" />
            </Link>
          )}
        </Grid>
        <Grid item lg={6}>
          <Box p={2} className={classes.box2}>
            <Link
              to={url}
              className={classNames(classes.noDecoration, classes.showFocus)}
            >
              <Typography variant="h6">
                <span className={classes.title}>{title}</span>
              </Typography>
            </Link>
            <Box>
              <Typography variant="body1" color="textSecondary">
                {snippet}
                <Link to={url} className={classes.noDecoration} tabIndex={-1}>
                  <span className={classes.link}> {t("readMore")}</span>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Card>
    </Hidden>
    <Hidden mdUp>
        <Card className={classes.card}>
          {src && (
            <Link to={url} tabIndex={-1}>
              <img src={src} className={classes.img} alt="" />
            </Link>
          )}
          <Box p={2}>
            <Link
              to={url}
              className={classNames(classes.noDecoration, classes.showFocus)}
            >
              <Typography variant="h6">
                <span className={classes.title}>{title}</span>
              </Typography>
            </Link>
            <Typography variant="body1" color="textSecondary">
              {snippet}
              <Link to={url} className={classes.noDecoration} tabIndex={-1}>
                <span className={classes.link}> {t("readMore")}</span>
              </Link>
            </Typography>
          </Box>
        </Card>
    </Hidden>
    </>
  );
}

ProductsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(ProductsCard);
