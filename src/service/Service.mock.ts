import {
  Circuit,
  Constructor,
  Driver,
  Race,
  Season,
  GetSeasonsResponse,
  GetSeasonDetailsResponse,
} from "./Service.model";

export const MOCK_CIRCUIT: Circuit = {
  circuitId: "testCircuitId",
  circuitName: "testCircuitName",
  url: "testUrl",
};

export const MOCK_DRIVER: Driver = {
  code: "testCode",
  dateOfBirth: "testDOB",
  driverId: "testDriverId",
  familyName: "testFamilyName",
  givenName: "testGivenName",
  nationality: "testNationality",
  permanentNumber: "testPermanentNumber",
  url: "testUrl",
};

export const MOCK_CONSTRUCTOR: Constructor = {
  constructorId: "testConstructorId",
  name: "testConstructorName",
  nationality: "testNationality",
  url: "testUrl",
};

export const MOCK_RACE: Race = {
  Circuit: MOCK_CIRCUIT,
  Results: [
    {
      Constructor: MOCK_CONSTRUCTOR,
      Driver: MOCK_DRIVER,
    },
  ],
  date: "testDate",
  raceName: "testRaceName",
  round: "testRoundName",
  season: "testSeason",
  url: "testUrl",
};

export const MOCK_SEASON: Season = {
  DriverStandings: [
    {
      Constructors: [MOCK_CONSTRUCTOR],
      Driver: MOCK_DRIVER,
      points: "testPoints",
      wins: "testWins",
    },
  ],
  round: "testRound",
  season: "testSeason",
};

export const MOCK_GET_SEASONS: GetSeasonsResponse = {
  MRData: {
    StandingsTable: {
      StandingsLists: [
        { ...MOCK_SEASON, season: "2005" },
        { ...MOCK_SEASON, season: "2006" },
        { ...MOCK_SEASON, season: "2007" },
        { ...MOCK_SEASON, season: "2008" },
        { ...MOCK_SEASON, season: "2009" },
        { ...MOCK_SEASON, season: "2010" },
      ],
    },
  },
};

export const MOCK_GET_SEASON_DETAILS: GetSeasonDetailsResponse = {
  MRData: {
    RaceTable: {
      Races: [
        { ...MOCK_RACE, round: "1" },
        { ...MOCK_RACE, round: "2" },
        { ...MOCK_RACE, round: "3" },
        { ...MOCK_RACE, round: "4" },
        { ...MOCK_RACE, round: "5" },
      ],
      season: "testSeason",
    },
  },
};
