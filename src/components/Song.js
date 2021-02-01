import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  const { name, cover, artist } = currentSong;
  return (
    <div className={`song-container`}>
      <img
        src={cover}
        alt={name}
        className={`${isPlaying ? "spin-record" : ""}`}
      />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
