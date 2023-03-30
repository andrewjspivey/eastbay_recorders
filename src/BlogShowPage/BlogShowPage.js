import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import styled from "styled-components";
import { Quote, QuoteWrapper } from "../SessionNotes/SessionShowPage";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin-top: 55px;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const HeaderContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 3.5rem;
  @media (max-width: 768px) {
    line-height: 2.5rem;
  }
`;

const BlogTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
  align-self: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const PicContainer = styled.div`
  width: 50%;
  margin: 2rem 0rem 3rem 0rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const BlogImage = styled.img`
  width: 100%;
`;

const BlogShowPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const blogInfo = blogs.find((p) => p.id === id);
    setBlog(blogInfo);
  }, [id]);
  return (
    <Container>
      {blog ? (
        <ContentContainer>
          <HeaderContainer>
            <BlogTitle>{blog.name}</BlogTitle>
          </HeaderContainer>
          {/* <div style={{ lineHeight: "2rem", width: "80%" }}>{blog.story}</div> */}
          <QuoteWrapper>{blog.story}</QuoteWrapper>
          <PicContainer>
            <BlogImage src={blog.pic} alt="" />
          </PicContainer>
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
