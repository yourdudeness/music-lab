import { useState } from "react";
import { useTracksList } from "../hooks/use-get-tracks";

export const TrackList = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const trackList = useTracksList({
    onSuccess: () => {
      setLoading(false);
    },
    onError() {
      setLoading(false);
    }
  });

  console.log("trackList", trackList.data, loading);
  return <div>track-list</div>;
};
