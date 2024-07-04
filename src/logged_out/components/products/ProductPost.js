import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Card, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomImage from "../../../shared/components/ZoomImage";
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import OtherCards from "../OtherCards";
import { useTranslation } from "react-i18next";

const styles = (theme) => ({
  productContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
    marginBottom:"2%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  img: {
    marginLeft:"2%",
    borderRadius:"5px",
    width: "70%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      marginLeft:"0%",
      width: "100%",
      height: "auto",
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    //backgroundColor:"green"
  },
});

function ProductPost(props) {
  const { classes, title, src, content, otherArticles } = props;
  const site = window.location.href;
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `BLC - ${title}`;
    smoothScrollTop();
  }, [title]);

  return (
    <Box
      className={classNames("lg-p-top", classes.wrapper)}
      display="flex"
      justifyContent="center"
    >
      <div className={classes.productContentWrapper}>
        <Grid container spacing={5}>
          <Grid item md={9}>
            <Card className={classes.card}>
              <Box pt={3} pr={3} pl={3} pb={2} style={{textAlign:"center"}}>
                <Typography variant="h4" color="#33383b">
                  <b>{title}</b>
                </Typography>
              </Box>
              <Box style={{textAlign:"center"}}>
                <ZoomImage className={classes.img} src={src} alt=""/>
              </Box>
              <Box p={3}>
                {content}
                <Box pt={2}>
                  <Grid spacing={1} container>
                    {["Facebook", "Twitter", "WhatsApp"].map((type, index) => (
                      <Grid item key={index}>
                        <ShareButton
                          type={type}
                          title="BLC - Better Life Communication"
                          description={"You better check this out! "+ site}
                          disableElevation
                          variant="contained"
                          className="text-white"
                          classes={{
                            label: "text-white",
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" paragraph color="#33383b">
            {t("otherProducts")}
            </Typography>
            {otherArticles.map((productPosts) => (
              <Box key={productPosts.id} mb={3}>
                <OtherCards
                  title={productPosts.title}
                  snippet={t(productPosts.snippet)}
                  url={`${productPosts.url}${productPosts.params}`}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

ProductPost.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  otherArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(ProductPost);
