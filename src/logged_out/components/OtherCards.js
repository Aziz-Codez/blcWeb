import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Typography, Card, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[2],
    paddingBottom:"10%",
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

function OtherCards(props) {
  const { classes, url, title, snippet } = props;
  const { t } = useTranslation();

  return (
    <Card className={classes.card}>
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
          {t(snippet)}
          <Link to={url} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> {t("readMore")}</span>
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}

OtherCards.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(OtherCards);
