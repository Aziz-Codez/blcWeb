import React from "react";
import Content from "./blogContents.js/content1";
import Content2 from "./blogContents.js/content2";
import Content3 from "./blogContents.js/content3";
import Content4 from "./blogContents.js/content4";
import Content5 from "./blogContents.js/content5";
import Content6 from "./blogContents.js/content6";
import Content7 from "./blogContents.js/content7";

const posts = [
  {
    title: "Blog.Title7",
    id: 7,
    date: "01/03/2023",
    src: `${process.env.PUBLIC_URL}/images/news/mwc-blc.jpg`,
    snippet: "Blog.Snippet7",
    content: <Content7/>,
  },
  {
    title: "Blog.Title4",
    id: 4,
    date: "02/02/2023",
    src: `${process.env.PUBLIC_URL}/images/news/blc-aws.png`,
    snippet: "Blog.Snippet4",
    content: <Content4/>,
  },
  {
    title: "Blog.Title6",
    id: 6,
    date: "12/12/2022",
    src: `${process.env.PUBLIC_URL}/images/feature5/openGrid.png`,
    snippet: "Blog.Snippet6",
    content: <Content6/>,
  },
  {
    title: "Blog.Title5",
    id: 5,
    date: "12/08/2022",
    src: `${process.env.PUBLIC_URL}/images/aypos/teydeb.jpeg`,
    snippet: "Blog.Snippet5",
    content: <Content5/>,
  },
  {
    title: "Blog.Title1",
    id: 1,
    date: "18/06/2021",
    src: `${process.env.PUBLIC_URL}/images/news/post1.jpeg`,
    snippet: "Blog.Snippet1",
    content: <Content/>,
  },
  {
    title: "Blog.Title2",
    id: 2,
    date: "17/06/2021",
    src: `${process.env.PUBLIC_URL}/images/news/post2.png`,
    snippet: "Blog.Snippet2",
    content: <Content2/>,
  },
  {
    title: "Blog.Title3",
    id: 3,
    date: "01/06/2021",
    src: `${process.env.PUBLIC_URL}/images/news/post3.jpeg`,
    snippet: "Blog.Snippet3",
    content: <Content3/>,
  },
];

export default posts;
