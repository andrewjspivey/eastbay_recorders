import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { albums } from "../data/albumData";

const MainContainer = styled.div`
  padding-top: 55px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const JumbotronContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const Jumbotron = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.background});
  background-size: cover;
`;

const JumboContent = styled.div`
  transform: translate(0px, 15%);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const JumboTitle = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 3.57143em;
  font-weight: bold;
  color: white;
  font-family: "Gotham";
`;

const JumboSubTitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 1.14286em;
  font-style: italic;
  text-decoration: underline;
  font-weight: bold;
  color: white;
  text-align: center;
  font-family: "Gotham";
`;

const JumboImage = styled.img`
  width: 500px;
  height: 500px;
`;

const LinkContainer = styled.div`
  width: 980px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
  border-bottom: 2px solid lightgrey;
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
  border-box: ;
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 90px;
  width: 107px;
  display: ${(props) => (props.hover ? "flex" : "none")};
  flex-flow: column;
  position: absolute;
  background: white;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.hover ? " 1px 1px 2px lightgrey,  -1px 0px 2px lightgrey" : "white"};
`;

const Link = styled.a`
  width: 100%;
  height: 30px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  &:hover {
    background: red;
    color: white;
    transition: all 0.3s ease-in-out;
    opacity 0.24s ease-in-out;
}
`;

const SongNoteContainer = styled.div`
  width: 980px;
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
          <JumbotronContainer>
            <Jumbotron background={album.albumCoverImg}>
              <JumboContent>
                <JumboTitle>{album.albumTitle}</JumboTitle>
                <JumboSubTitle>{album.band}</JumboSubTitle>
                <JumboImage src={album.albumCoverImg} />
              </JumboContent>
            </Jumbotron>
          </JumbotronContainer>
          <LinkContainer>
            <LinkButton
              hover={hover}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
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
                MUSIC
              </Link>
            </LinksList>
          </LinkContainer>
          <SongNoteContainer>
            <SongNoteTitle>Song Note</SongNoteTitle>
            <SongNoteInfo>{album.songNote}</SongNoteInfo>
          </SongNoteContainer>
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
