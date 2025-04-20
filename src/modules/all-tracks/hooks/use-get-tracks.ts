import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import { getTracks, TracksData } from "../api/get-tracks";

type Props = {
  onSuccess?: (data: TracksData) => void;
  onError?: (error: any) => void;
};

export const useTracksList = () => {
  const query = useQuery<TracksData>({
    queryKey: ["tracks"],
    retry: false,
    retryOnMount: false,
    queryFn: getTracks
  });

  return query;
};
