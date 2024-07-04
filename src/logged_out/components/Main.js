import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import withStyles from "@mui/styles/withStyles";
import NavBar from "./navigation/NavBar";
import Footer2 from "./footer/Footer2";
import "aos/dist/aos.css";
import dummyBlogPosts from "../dummy_data/blogPosts";
import dummyProductPosts from "../dummy_data/productPosts";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import { useTranslation } from "react-i18next";
import ScrollButton from "../../shared/components/ScrollToTop";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [productPosts, setProductPosts] = useState([]);
  const { t } = useTranslation();

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title = `BLC - ${t("Home") }`;
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectAbout = useCallback(() => {
    smoothScrollTop();
    document.title = `BLC - ${t("About Us") }`;
    setSelectedTab("About");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = `BLC - ${t("News")}`;
    setSelectedTab("News");
  }, [setSelectedTab]);

  const selectProduct = useCallback(() => {
    smoothScrollTop();
    document.title = `BLC - ${t("Products")}`;
    setSelectedTab("Products");
  }, [setSelectedTab]);

  const selectRD = useCallback(() => {
    smoothScrollTop();
    document.title = `BLC - ${t("R&D")}`;
    setSelectedTab("R&D");
  }, [setSelectedTab]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/news/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);

  const fetchProductPosts = useCallback(() => {
    const productPosts = dummyProductPosts.map((productPost) => {
      let title = productPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      productPost.url = `/product/${title}`;
      productPost.params = `?id=${productPost.id}`;
      return productPost;
    });
    setProductPosts(productPosts);
  }, [setProductPosts]);

  useEffect(fetchBlogPosts, [fetchBlogPosts]);

  useEffect(fetchProductPosts, [fetchProductPosts]);

  return (
    <div className={classes.wrapper}>
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      <Routing
        selectHome={selectHome}
        selectAbout={selectAbout}
        blogPosts={blogPosts}
        selectBlog={selectBlog}
        productPosts={productPosts}
        selectProduct={selectProduct}
        selectRD={selectRD}
      />
      <ScrollButton/>
      <Footer2 />
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
