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
  });
  const [showLibrary, setShowLibrary] = useState(false);
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    setSongInfo({
      current: e.target.currentTime,
      duration: e.target.duration,
    });
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
      ></audio>
    </div>
  );
}

export default App;
