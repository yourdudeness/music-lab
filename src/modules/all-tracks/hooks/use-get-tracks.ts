import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { getTracks, TracksData } from "../api/get-tracks";

type Props = {
  onSuccess?: (data: TracksData) => void;
  onError?: (error: any) => void;
};

export const useTracksList = ({ onSuccess, onError }: Props) => {
  const query = useQuery<TracksData>({
    queryKey: ["tracks"],
    retry: false,
    retryOnMount: false,
    queryFn: getTracks
  });

  const { data, isError, isSuccess } = query;

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && onError) {
      onError(data);
    }
  }, [isError, data]);

  return query;
};
