import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sessionNotes } from "../data/sessionNotesData";
import styled from "styled-components";
import ebr_quote from "../assets/ebr_quote.png";

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

export const QuoteWrapper = styled.div`
  line-height: 2rem;
  width: 80%;
  padding-top: 3rem;
  background-color: #eeeee5;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 418px) {
    padding-top: 2rem;
  }
`;

const BlogTitle = styled.h1`
  font-weight: 400;
  font-size: 3rem;
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
export const Quote = styled.p`
  padding: 0rem 4rem 3rem 4rem;
  color: #ad1100;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 418px) {
    padding: 0rem 1rem;
  }
`;

const SessionShowPage = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const blogInfo = sessionNotes.find((p) => p.id === id);
    setBlog(blogInfo);
  }, [id]);

  return (
    <Container>
      {blog ? (
        <ContentContainer>
          <HeaderContainer>
            <BlogTitle>{blog.name}</BlogTitle>
          </HeaderContainer>
          <QuoteWrapper>
            <img src={ebr_quote} alt="" />
            {blog.story}
          </QuoteWrapper>
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

export default SessionShowPage;
