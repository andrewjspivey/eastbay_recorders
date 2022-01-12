import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { albums } from "../data/albumData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MainContainer = styled.div`
  padding-top: 55px;
  width: 100%;
`;

const JumbotronContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const Jumbotron = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0;
  @media (max-width: 481px) {
    margin-bottom: 1rem;
  }
`;

const JumboContent = styled.div`
  width: 50%;
  transform: translate(0px, 15%);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const JumboTitle = styled.h1`
  margin: 0;
  margin-bottom: 5px;
  color: white;
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 481px) {
    font-size: 2rem;
  }
`;

const JumboSubTitle = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-size: 1.8rem;
  color: darkgrey;
  @media (max-width: 481px) {
    font-size: 1rem;
    margin-bottom: 0px;
  }
`;

const JumboImage = styled.img`
  width: 90%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 25px;
  @media (max-width: 768px) {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  @media (min-width: 1081px) {
    padding-top: 2rem;
  }
`;

const LinkButton = styled.div`
  padding: 15px;
  width: 80px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.hover ? "rgba(0, 0, 0, 0.1)" : "#ad1000")};
  color: ${(props) => (props.hover ? "#ad1000" : "white")};
  box-shadow: ${(props) =>
    props.hover
      ? "inset 1px 1px 2px lightgrey, inset -1px 0px 2px lightgrey"
      : "white"};
  font-size: 12px;
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  margin-top: 105px;
  width: 107px;
  display: ${(props) => (props.hover === true ? "flex" : "none")};
  flex-flow: column;
  position: absolute;
  background: white;
  cursor: pointer;
  box-shadow: 1px 1px 2px #d3d3d3, -1px 0px 2px #d3d3d3;
`;

const Link = styled.a`
  width: 100%;
  height: 35px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #ad1000;
    transition: all 0.3s ease-in-out;
    opacity: 0.24s ease-in-out;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const PlaylistContainer = styled.div`
  width: 60%;
  margin: 2rem;
  @media (max-width: 768px) {
    width: 75%;
  }
`;
const SongNoteContainer = styled.div`
  width: 60%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 3rem;
    width: 75%;
  }
`;

const SongNoteTitle = styled.h2`
  margin: 0;
  color: grey;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 0.7rem;
  }
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const ContentHeader = styled.h2`
  font-family: "Gotham";
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
const Underline = styled.div`
  height: 3px;
  width: 60px;
  background-color: black;
  @media (max-width: 768px) {
    height: 2px;
    align-self: center;
  }
`;

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const [hover, setHover] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const albumInfo = albums.find((p) => p.id === id);
    setAlbum(albumInfo);
  }, [id]);

  return (
    <>
      {album ? (
        <MainContainer>
          <JumbotronContainer>
            <Jumbotron background={album.albumCoverImg}>
              <JumboContent>
                <HeaderContainer>
                  <JumboTitle>{album.albumTitle}</JumboTitle>
                  <JumboSubTitle>{album.band}</JumboSubTitle>
                </HeaderContainer>
                <JumboImage src={album.albumCoverImg} />
              </JumboContent>
            </Jumbotron>
          </JumbotronContainer>
          <BodyContainer>
            <LinkContainer>
              <LinkButton
                hover={hover}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setHover(true)}
              >
                Buy Albums
              </LinkButton>
              <LinksList hover={hover}>
                <Link
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  target="_blank"
                  href={album?.links?.spotify}
                >
                  Spotify
                </Link>
                <Link
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  target="_blank"
                  href={album?.links?.apple}
                >
                  Apple Music
                </Link>
              </LinksList>
            </LinkContainer>
            <SongNoteContainer>
              <NameContainer>
                <ContentHeader>Song Note</ContentHeader>
                <Underline />
              </NameContainer>
              <p style={{ lineHeight: "2rem" }}>{album.songNote}</p>
            </SongNoteContainer>
            <PlaylistContainer>
              <NameContainer>
                <ContentHeader>Album</ContentHeader>
                <Underline style={{ marginBottom: "1rem" }} />
              </NameContainer>
              <Tabs>
                <TabList>
                  <Tab>
                    <SongNoteTitle>Spotify</SongNoteTitle>
                  </Tab>
                  <Tab>
                    <SongNoteTitle>Apple Music</SongNoteTitle>
                  </Tab>
                </TabList>
                <TabPanel>
                  {album.playlist?.spotify ? (
                    <iframe
                      src={album.playlist?.spotify}
                      title="spotify-player"
                      aria-hidden="true"
                      width="100%"
                      height="400"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    ></iframe>
                  ) : (
                    <h3>Currently unavailable on Spotify</h3>
                  )}
                </TabPanel>
                <TabPanel>
                  {album.playlist?.apple ? (
                    <iframe
                      title="spotify-player"
                      aria-hidden="true"
                      allow="autoplay *; encrypted-media *; fullscreen *"
                      height="450"
                      style={{
                        width: "100%",
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
            </PlaylistContainer>
          </BodyContainer>
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
