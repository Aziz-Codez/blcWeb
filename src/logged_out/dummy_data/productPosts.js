import React from "react";
import "./productpost.css";
import Content1 from "./productContents.js/content1";
import Content2 from "./productContents.js/content2";
import Content3 from "./productContents.js/content3";
import Content4 from "./productContents.js/content4";

const products = [
  {
    title: "BLC Cloud Infrastructure (IAAS)",
    id: 1,
    src: `${process.env.PUBLIC_URL}/images/products/openstack.jpg`,
    snippet: "Product.SnippetInfrastructure",
    content: <Content1/>,
  },
  {
    title: "BLC Platform (PAAS)",
    id: 2,
    src: `${process.env.PUBLIC_URL}/images/products/paas-head.jpeg`,
    snippet: "Product.SnippetPlatform",
    content: <Content2/>,
  },
  {
    title: "Better Life IT Services (SAAS)",
    id: 3,
    src: `${process.env.PUBLIC_URL}/images/products/saas.png`,
    snippet: "Product.SnippetBIT",
    content: <Content3/>,
  },
  {
    title: "BLC Task Tracking System",
    id: 4,
    src: `${process.env.PUBLIC_URL}/images/products/task-monitoring.png`,
    snippet: "Product.SnippetTask",
    content: <Content4/>,
  },
];

export default products;
