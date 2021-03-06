import React from "react";
import styled from "styled-components";
import blog_Home from "../assets/blog_Home.jpeg";
import logo_ebr from "../assets/logo_ebr.png";
import { blogs } from "../data/blogData";
import { sessionNotes } from "../data/sessionNotesData";
import { Link } from "react-router-dom";

export const HeaderPic = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const JumboContainer = styled.header`
  width: 100%;
  padding-top: 50px;
  /* margin-bottom: 3rem; */
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const JumboTitle = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2rem;
  @media (max-width: 481px) {
    font-size: 20px;
  }
`;

export const JumboHeader = styled.img`
  position: absolute;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Underline = styled.div`
  height: 3px;
  width: 60px;
  background-color: white;
  @media (max-width: 768px) {
    height: 2px;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  @media (max-width: 768px) {
    /* padding-top: 0rem; */
  }
`;
const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const SingleBlog = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
const BlogImages = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  :hover {
    opacity: 0.9;
  }
  @media (max-width: 481px) {
    height: 80%;
  }
`;

const BlogTitle = styled.div`
  line-height: 1.2rem;
  padding: 0px;
  overflow: hidden;
  text-align: center;
`;

const BlogHome = () => {
  return (
    <div>
      <JumboContainer>
        <div style={{ position: "absolute", padding: "1rem 0 0 2rem" }}>
          <JumboHeader src={logo_ebr} />
        </div>
        <HeaderPic>
          <img style={{ width: "100%" }} src={blog_Home} alt="" />
          <NameContainer>
            <JumboTitle>
              <h1 style={{ marginBottom: "10px" }}>BLOG</h1>
              <Underline />
            </JumboTitle>
          </NameContainer>
        </HeaderPic>
      </JumboContainer>
      <MainContainer>
        <GridContainer>
          {blogs.map((blog, index) => (
            <SingleBlog key={index}>
              <Link
                to={blog.blogLink}
                style={{
                  textDecoration: "none",
                  color: "black",
                  height: "80%",
                }}
              >
                <BlogImages src={blog.pic} alt="" />
                <BlogTitle>
                  <h5
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {blog.name}
                  </h5>
                </BlogTitle>
              </Link>
            </SingleBlog>
          ))}
          {sessionNotes.map((blog, index) => (
            <SingleBlog key={index}>
              <Link
                to={blog.blogLink}
                style={{
                  textDecoration: "none",
                  color: "black",
                  height: "80%",
                }}
              >
                <BlogImages src={blog.pic} alt="" />
                <BlogTitle>
                  <h5
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {blog.name}
                  </h5>
                </BlogTitle>
              </Link>
            </SingleBlog>
          ))}
        </GridContainer>
      </MainContainer>
    </div>
  );
};

export default BlogHome;
