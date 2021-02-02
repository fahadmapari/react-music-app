import React from "react";
import { playAudio } from "../utils";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const { name, cover, artist } = song;

  const setSongHandler = (e) => {
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);

    const newSongs = songs.map((stateSongs) => {
      if (stateSongs.id === song.id) {
        return {
          ...stateSongs,
          active: true,
        };
      } else {
        return {
          ...stateSongs,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={setSongHandler}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
