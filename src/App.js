import React, { useState, useRef } from "react";
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import musicProvider from "./data";

function App() {
  const [songs, setSongs] = useState(musicProvider());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animationPer: 0,
  });
  const [showLibrary, setShowLibrary] = useState(false);
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const roundedCurrent = Math.round(songInfo.current);
    const roundedDuration = Math.round(songInfo.duration);
    const animate = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      current: e.target.currentTime,
      duration: e.target.duration,
      animationPer: animate,
    });
  };

  const nextSongHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();

    const newSongs = songs.map((stateSongs) => {
      if (stateSongs.id === currentSong.id) {
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
    <div>
      <Nav showLibrary={showLibrary} setShowLibrary={setShowLibrary} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        showLibrary={showLibrary}
        setShowLibrary={setShowLibrary}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={nextSongHandler}
      ></audio>
    </div>
  );
}

export default App;
