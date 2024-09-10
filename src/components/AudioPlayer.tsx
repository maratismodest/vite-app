import React, { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  useEffect(() => {
    if (duration === currentTime) {
      setIsPlaying(false);
    }
  }, [duration, currentTime]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const volume = Number(e.target.value);
    audio.volume = volume;
    setVolume(volume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      <button onClick={togglePlayPause} className="rounded-full size-16">
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        hidden
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="seek-bar"
      />
      <span hidden>{formatTime(currentTime)}</span>
      <span hidden>{formatTime(duration)}</span>
      <input
        hidden
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={handleVolumeChange}
        className="volume-control"
      />
    </div>
  );
};

export default AudioPlayer;
