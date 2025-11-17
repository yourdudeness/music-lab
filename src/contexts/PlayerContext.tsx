import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';
import { Track } from '../modules/all-tracks/api/get-tracks';

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playlist: Track[];
  play: (track: Track) => void;
  pause: () => void;
  resume: () => void;
  next: () => void;
  previous: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setPlaylist: (tracks: Track[]) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const [playlist, setPlaylist] = useState<Track[]>([]);

  // Initialize audio element
  if (!audioRef.current) {
    audioRef.current = new Audio();
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    });
    audioRef.current.addEventListener('loadedmetadata', () => {
      setDuration(audioRef.current?.duration || 0);
    });
    audioRef.current.addEventListener('ended', () => {
      next();
    });
  }

  const play = (track: Track) => {
    if (audioRef.current) {
      audioRef.current.src = track.trackUrl;
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resume = () => {
    if (audioRef.current && currentTrack) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const next = () => {
    if (!currentTrack || playlist.length === 0) return;

    const currentIndex = playlist.findIndex(track => track._id === currentTrack._id);
    const nextIndex = (currentIndex + 1) % playlist.length;
    play(playlist[nextIndex]);
  };

  const previous = () => {
    if (!currentTrack || playlist.length === 0) return;

    const currentIndex = playlist.findIndex(track => track._id === currentTrack._id);
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    play(playlist[prevIndex]);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolumeState(newVolume);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        playlist,
        play,
        pause,
        resume,
        next,
        previous,
        seek,
        setVolume,
        setPlaylist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
