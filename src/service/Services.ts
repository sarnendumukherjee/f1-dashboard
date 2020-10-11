import axios from "axios";
import { GetSeasonDetailsResponse, GetSeasonsResponse } from "./Service.model";

const URL_GET_SESSIONS_2005_TO_2015 =
  "https://ergast.com/api/f1/driverstandings/1.json?limit=11&offset=55";

export const getSeasons = (): Promise<{ data: GetSeasonsResponse }> => {
  return axios.get(URL_GET_SESSIONS_2005_TO_2015);
};

export const getSeasonDetailsBySeason = (
  season: string
): Promise<{ data: GetSeasonDetailsResponse }> => {
  return axios.get(`https://ergast.com/api/f1/${season}/results/1.json`);
};
