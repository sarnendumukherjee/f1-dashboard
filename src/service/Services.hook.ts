import { useEffect, useState } from "react";
import { GetSeasonDetailsResponse, GetSeasonsResponse } from "./Service.model";
import { getSeasonDetailsBySeason, getSeasons } from "./Services";

interface UseServiceResponse {
  loading?: boolean;
  error?: {
    reason: string;
  };
}

export interface UseGetSeasonsResponse extends UseServiceResponse {
  data?: GetSeasonsResponse;
}

export interface UseGetSeasonDetailsResponse extends UseServiceResponse {
  data?: GetSeasonDetailsResponse;
}

export const useGetSeasons = (): UseGetSeasonsResponse => {
  const [getSeasonsResponse, setGetSeasonsResponse] = useState<
    UseGetSeasonsResponse
  >({ loading: true });
  useEffect(() => {
    getSeasons()
      .then(({ data }) => {
        setGetSeasonsResponse({ data: data, loading: false });
      })
      .catch((error) => {
        setGetSeasonsResponse({ error: { reason: error } });
      });
  }, []);
  return getSeasonsResponse;
};

export const useGetSeasonDetails = (
  season: string
): UseGetSeasonDetailsResponse => {
  const [getSeasonDetailsResponse, setGetSeasonDetailsResponse] = useState<
    UseGetSeasonDetailsResponse
  >({ loading: true });
  useEffect(() => {
    getSeasonDetailsBySeason(season)
      .then(({ data }) => {
        setGetSeasonDetailsResponse({ data: data, loading: false });
      })
      .catch((error) => {
        setGetSeasonDetailsResponse({ error: { reason: error } });
      });
  }, [season]);
  return getSeasonDetailsResponse;
};
