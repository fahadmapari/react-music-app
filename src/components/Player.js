import React, { useEffect } from "react";
import { playAudio } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songInfo,
  setSongInfo,
  currentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  useEffect(() => {
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
    playAudio(isPlaying, audioRef);
    // eslint-disable-next-line
  }, [currentSong]);

  const playSongHandler = (e) => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const songSliderHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      current: e.target.value,
    });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const skipTrackHandler = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    switch (direction) {
      case "SKIP_FORWARD":
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        break;
      case "SKIP_BACK":
        if ((currentIndex - 1) % songs.length === -1) {
          setCurrentSong(songs[songs.length - 1]);
        } else {
          setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.current)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.current}
          onChange={songSliderHandler}
        />
        <p>{formatTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("SKIP_BACK")}
        />

        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={!isPlaying ? faPlay : faPause}
          size="2x"
        />

        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("SKIP_FORWARD")}
        />
      </div>
    </div>
  );
};

export default Player;
