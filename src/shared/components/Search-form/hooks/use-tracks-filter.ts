import { useCallback } from "react";
import { useSearchParams } from "react-router";

export function useTracksFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const setFilters = useCallback((filters: { search?: string }) => {
    setSearchParams((params) => {
      const newParams = new URLSearchParams(params);
      if (filters.search !== undefined) {
        newParams.set("search", filters.search);
      }
      return newParams;
    });
  }, []);

  return {
    searchQuery,
    setFilters
  };
}
