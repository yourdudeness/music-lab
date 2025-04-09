import React, { useState } from "react";
import { TracksData } from "../api/get-tracks";
import { useTracksList } from "../hooks/use-get-tracks";

export const TrackList = () => {
  const [tracks, setTracks] = useState<TracksData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const trackList = useTracksList({
    onSuccess: (data) => {
      setTracks(data);
      setLoading(false);
    },
    onError() {
      setTracks(null);
      setLoading(false);
    }
  });

  console.log("trackList", tracks);
  return <div>track-list</div>;
};
