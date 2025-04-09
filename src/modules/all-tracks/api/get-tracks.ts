import { apiClient } from "../../../shared/api/http-client";

export type Track = {
  _id: string;
  name: string;
  author: string;
  releaseDate: string; // TODO - use Date??
  genre: string;
  durationInSeconds: number;
  album: string;
  previewUrl: string;
  trackUrl: string;
};

export type TracksData = Track[];

export const getTracks = async () => {
  const result = await apiClient.get<TracksData>("/tracks");

  return result.data;
};
