import { apiClient } from "../../../shared/api/http-client";

export type Playlists = {
  _id: string;
  name: string;
  owner: string;
  tracks: string[];
};

export type PlaylistsData = Playlists[];

export const getPlaylists = async () => {
  const result = await apiClient.get<PlaylistsData>("/playlists");

  return result.data;
};
