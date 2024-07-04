import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";
import Products from "./products/Products";
import ProductPost from "./products/ProductPost";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import About from "./about/About";
import RD from "./rd/RD";

function Routing(props) {
  const { blogPosts, selectBlog, selectHome, productPosts, selectProduct, selectAbout, selectRD} = props;
  useLocationBlocker();
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={BlogPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/news"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />

      {productPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={ProductPost}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={productPosts.filter(
            (productPost) => productPost.id !== post.id
          )}
        />
      ))}
      <PropsRoute
        exact
        path="/products"
        component={Products}
        selectProduct={selectProduct}
        productPosts={productPosts}
      />
      <PropsRoute path="/about" component={About} selectAbout={selectAbout} />
      <PropsRoute path="/r&d" component={RD} selectRD={selectRD} />
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectRD: PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectBlog: PropTypes.func.isRequired,
  productPosts: PropTypes.arrayOf(PropTypes.object),
  selectProduct: PropTypes.func.isRequired,
};

export default memo(Routing);
