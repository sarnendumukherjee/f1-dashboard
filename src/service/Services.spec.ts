import Axios from "axios";
import { getSeasonDetailsBySeason, getSeasons } from "./Services";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

const MOCK_GET_RESPONSE = "testGetResponse";

describe("Services", () => {
  beforeAll(() => {
    (Axios.get as jest.Mock).mockReturnValue(MOCK_GET_RESPONSE);
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("getSeasons", () => {
    it("should call axios.get with URL return the response", () => {
      const result = getSeasons();
      expect(Axios.get).toBeCalledTimes(1);
      expect(result).toBe(MOCK_GET_RESPONSE);
    });
  });
  describe("getSeasonDetailsBySeason", () => {
    it("should call axios.get with the passed season in it and return the correct response", () => {
      const mockSeason = "2015";
      const result = getSeasonDetailsBySeason(mockSeason);
      expect(Axios.get).toBeCalledTimes(1);
      expect((Axios.get as jest.Mock).mock.calls[0][0]).toContain(mockSeason);
      expect(result).toBe(MOCK_GET_RESPONSE);
    });
  });
});
