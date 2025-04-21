import { useQuery } from "@tanstack/react-query";
import { getTracks, TracksData } from "../api/get-tracks";

export const useTracksList = () => {
  const query = useQuery<TracksData>({
    queryKey: ["tracks"],
    retry: false,
    retryOnMount: false,
    queryFn: getTracks
  });

  return query;
};
