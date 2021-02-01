import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setSongs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
            key={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;