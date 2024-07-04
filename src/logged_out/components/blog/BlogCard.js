import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Typography, Card, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
  img: {
    width: "100%",
    height: 250,
    marginBottom: 8,
  },
  blogCard: {
    boxShadow: theme.shadows[2],
    height: "67vh",
    [theme.breakpoints.down("lg")]: {
      height:"78vh"
    },
    [theme.breakpoints.down("sm")]: {
      height:"auto"
    },
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

function BlogCard(props) {
  const { classes, url, src, date, title, snippet } = props;
  const { t } = useTranslation();

  return (
    <Card className={classes.blogCard} >
      {src && (
        <Link to={url} tabIndex={-1}>
          <img src={src} className={classes.img} alt="" />
        </Link>
      )}
      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>
        <Link
          to={url}
          className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span className={classes.title}>{t(title)}</span>
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
        {t(snippet)}
          <Link to={url} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> {t("readMore")}</span>
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(BlogCard);
