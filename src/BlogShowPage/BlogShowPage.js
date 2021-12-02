import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 3.5rem;
`;

const BlogTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
`;

const BlogShowPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const blogInfo = blogs.find((p) => p.id === id);
    setBlog(blogInfo);
    console.log(blog.story);
  }, []);
  return (
    <Container>
      {blog ? (
        <ContentContainer>
          <HeaderContainer>
            <BlogTitle>{blog.name}</BlogTitle>
          </HeaderContainer>
          <div style={{ lineHeight: "2rem", width: "80%" }}>
            <p>{blog.story}</p>
          </div>
          <img src={blog.pic} alt="" />
        </ContentContainer>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </Container>
  );
};

export default BlogShowPage;
