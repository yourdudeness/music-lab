import { apiClient } from "../../../api/http-client";

export type Track = {
  _id: string;
  name: string;
  author: string;
  releaseDate: string;
  genre: string;
  durationInSeconds: number;
  album: string;
  previewUrl: string;
  trackUrl: string;
};

export type TracksData = Track[];

export const getFoundTracks = async (name: string) => {
  const result = await apiClient.get<TracksData>(`/tracks/search/${name}`);

  return result.data;
};
