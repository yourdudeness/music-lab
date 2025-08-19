import { TracksData } from "@/shared/components/Search-form/api/get-search-tracks";
import { apiClient } from "../../../shared/api/http-client";

export type PlaylistData = {
  _id: string;
  name: string;
  __v: number;
  tracks: TracksData;
};

export const getPlaylist = async (playlistId: string) => {
  const result = await apiClient.get<PlaylistData>(`/playlists/${playlistId}`);

  return result.data;
};
