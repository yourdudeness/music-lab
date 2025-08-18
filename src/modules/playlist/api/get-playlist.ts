import { apiClient } from "../../../shared/api/http-client";

export type PlaylistData = string[];

export const getPlaylist = async (playlistId: string) => {
  const result = await apiClient.get<PlaylistData>(`/playlists/${playlistId}`);

  return result.data;
};
