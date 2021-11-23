import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { albums } from "../data/albumData";

const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const albumInfo = albums.find((p) => p.id === id);
    setAlbum(albumInfo);
  }, []);
  return (
    <>
      {album ? (
        <div style={{ width: "500px", height: "500px" }}>
          <div style={{ width: "80%", height: "100%" }}>
            <h1>{album.band}</h1>
            <h2>{album.albumTitle}</h2>
            <img src={album.albumCoverImg} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </>
  );
};

export default AlbumPage;
