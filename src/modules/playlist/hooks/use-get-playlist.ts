import { useQuery } from "@tanstack/react-query";
import { getPlaylist, PlaylistData } from "../api/get-playlist";

export const usePlaylist = (playlistId: string) => {
  const query = useQuery<PlaylistData>({
    queryKey: ["playlist"],
    retry: false,
    retryOnMount: false,
    queryFn: () => getPlaylist(playlistId)
  });

  return query;
};
