import { useQuery } from "@tanstack/react-query";
import { getFoundTracks, TracksData } from "../api/get-search-tracks";

export const useTracks = (name: string) => {
  return useQuery<TracksData>({
    queryKey: ["tracks", name],
    queryFn: () => getFoundTracks(name),
    enabled: !!name,
    retry: false,
    retryOnMount: false
  });
};
