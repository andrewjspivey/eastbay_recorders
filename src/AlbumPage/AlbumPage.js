import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { albums } from "../data/albumData";

const MainContainer = styled.div`
  width: 100%;
  padding-top: 60px;
`;

// const JumbotronContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #232020;
// `;

// const Jumbotron = styled.div`
//   width: 60%;
//   height: 700px;
//   background-image: url(${(props) => props.img});
//   opacity
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

const AlbumContainer = styled.div`
  width: 75%;
  display: column;
  justify-content: center;
  margin: auto;
  @media (max-width: 768px) {
    padding: 2rem 0 2rem 0;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: column;
  margin-bottom: 10px;
  border-bottom: 0.5px solid lightgrey;
  padding: 0;
`;

const AlbumTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  color: grey;
`;

const BandTitle = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  padding-left: 10px;
  color: darkgrey;
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 40%;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LinkContainer = styled.div`
  margin-top: 15px;
  padding: 15px;
  width: 80px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.hover ? "white" : "#ad1000")};
  color: ${(props) => (props.hover ? "#ad1000" : "white")};
  box-shadow: ${(props) =>
    props.hover
      ? "inset 1px 1px 1.5px lightgrey, inset -1px 0px 1.5px lightgrey"
      : "white"};
  font-size: 12px;
  border-box: ;
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  width: 80px;
  display: ${(props) => (props.hover ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-flow: column;
  box-shadow: ${(props) =>
    props.hover
      ? "inset 1px 1px 1.5px lightgrey, inset -1px 0px 1.5px lightgrey"
      : "white"};
`;

const SongNoteContainer = styled.div`
  width: 60%;
  padding: 10px;
`;

const SongNoteTitle = styled.h2`
  margin: 0;
  color: grey;
`;

const SongNoteInfo = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 30px;
  line-height: 1.7rem;
  font-weight: bold;
`;

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const [hover, setHover] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const albumInfo = albums.find((p) => p.id === id);
    setAlbum(albumInfo);
  }, []);

  return (
    <>
      {album ? (
        <MainContainer>
          {/* <JumbotronContainer>
            <Jumbotron img={album.albumCoverImg}></Jumbotron>
          </JumbotronContainer> */}
          <AlbumContainer>
            <HeaderContainer>
              <AlbumTitle>{album.albumTitle}</AlbumTitle>
              <BandTitle>by: {album.band}</BandTitle>
            </HeaderContainer>
            <BodyContainer>
              <ImageContainer>
                <img
                  style={{ width: "100%" }}
                  src={album.albumCoverImg}
                  sd
                  alt=""
                />
                <LinkContainer
                  hover={hover}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Buy Albums
                </LinkContainer>
                <LinksList hover={hover}>
                  <li>Hello</li>
                  <li>Hello</li>
                  <li>Hello</li>
                </LinksList>
              </ImageContainer>
              <SongNoteContainer>
                <Tabs>
                  <TabList>
                    <Tab>
                      <SongNoteTitle>Song Note</SongNoteTitle>
                    </Tab>
                    <Tab>
                      <SongNoteTitle>Spotify</SongNoteTitle>
                    </Tab>
                    <Tab>
                      <SongNoteTitle>Apple Music</SongNoteTitle>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <SongNoteInfo>{album.songNote}</SongNoteInfo>
                  </TabPanel>
                  <TabPanel>
                    {album.playlist?.spotify ? (
                      <iframe
                        src={album.playlist?.spotify}
                        width="100%"
                        height="400"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      ></iframe>
                    ) : (
                      <h3>Currently unavailable on Spotify</h3>
                    )}
                  </TabPanel>
                  <TabPanel>
                    {album.playlist?.apple ? (
                      <iframe
                        allow="autoplay *; encrypted-media *; fullscreen *"
                        frameborder="0"
                        height="450"
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          background: "transparent",
                        }}
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        src={album.playlist?.apple}
                      ></iframe>
                    ) : (
                      <h3>Currently unavailable on Apple Music</h3>
                    )}
                  </TabPanel>
                </Tabs>
              </SongNoteContainer>
            </BodyContainer>
          </AlbumContainer>
        </MainContainer>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </>
  );
};

export default AlbumPage;
