import { useQuery } from "@tanstack/react-query";
import { getPlaylists, PlaylistsData } from "../api/get-playlists";

export const usePlaylists = () => {
  const query = useQuery<PlaylistsData>({
    queryKey: ["playlists"],
    retry: false,
    retryOnMount: false,
    queryFn: getPlaylists
  });

  return query;
};
