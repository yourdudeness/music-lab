import { useState, useEffect } from "react";
import { useTracksList } from "../hooks/use-get-tracks";
import { usePlayer } from "../../../contexts/PlayerContext";

const formatDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const TrackList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { play, currentTrack, isPlaying, pause, setPlaylist } = usePlayer();

  const trackList = useTracksList({
    onSuccess: () => {
      setLoading(false);
    },
    onError() {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (trackList.data) {
      setPlaylist(trackList.data);
    }
  }, [trackList.data, setPlaylist]);

  const handlePlayClick = (track: typeof trackList.data extends (infer T)[] ? T : never) => {
    if (currentTrack?._id === track._id && isPlaying) {
      pause();
    } else {
      play(track);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Загрузка треков...</div>
      </div>
    );
  }

  if (!trackList.data || trackList.data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400">Треки не найдены</div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-32">
      <h1 className="text-3xl font-bold text-white mb-6">Все треки</h1>
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-800 border-b border-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-12">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Название
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Исполнитель
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Альбом
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Жанр
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-24">
                Длительность
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {trackList.data.map((track, index) => {
              const isCurrentTrack = currentTrack?._id === track._id;
              const isTrackPlaying = isCurrentTrack && isPlaying;

              return (
                <tr
                  key={track._id}
                  className={`hover:bg-gray-800 transition cursor-pointer ${
                    isCurrentTrack ? 'bg-gray-800' : ''
                  }`}
                  onClick={() => handlePlayClick(track)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isTrackPlaying ? (
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : isCurrentTrack ? (
                      <div className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">{index + 1}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm font-medium ${isCurrentTrack ? 'text-green-500' : 'text-white'}`}>
                      {track.name}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">{track.author}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">{track.album}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">{track.genre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-400">{formatDuration(track.durationInSeconds)}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
