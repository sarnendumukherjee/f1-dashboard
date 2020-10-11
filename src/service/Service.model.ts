export interface GetSeasonsResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: Season[];
    };
  };
}
export interface Season {
  DriverStandings: {
    points: string;
    wins: string;
    Driver: Driver;
    Constructors: Constructor[];
  }[];
  round: string;
  season: string;
}
export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}
export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface GetSeasonDetailsResponse {
  MRData: {
    RaceTable: {
      Races: Race[];
      season: string;
    };
  };
}
export interface Race {
  date: string;
  raceName: string;
  round: string;
  season: string;
  url: string;
  Circuit: Circuit;
  Results: Result[];
}
export interface Circuit {
  circuitId: string;
  circuitName: string;
  url: string;
}
export interface Result {
  Constructor: Constructor;
  Driver: Driver;
}
