import { renderHook } from "@testing-library/react-hooks";
import { getSeasonDetailsBySeason, getSeasons } from "./Services";
import { useGetSeasons, useGetSeasonDetails } from "./Services.hook";

jest.mock("./Services", () => ({
  getSeasons: jest.fn().mockResolvedValue({}),
  getSeasonDetailsBySeason: jest.fn().mockResolvedValue({}),
}));

describe("Services.hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe("useGetSeasons", () => {
    it("should return loading while loading and return data if call succeeds", async () => {
      const MOCK_SUCCESS_VALUE = { data: "testMockSuccess" };
      (getSeasons as jest.Mock).mockResolvedValueOnce(MOCK_SUCCESS_VALUE);
      const { result, waitForNextUpdate } = renderHook(() => useGetSeasons());
      expect(result.current).toEqual({ loading: true });
      await waitForNextUpdate();
      expect(result.current.data).toBe(MOCK_SUCCESS_VALUE.data);
    });
    it("should return error if call fails", async () => {
      const testError = "testError";
      (getSeasons as jest.Mock).mockRejectedValueOnce(testError);
      const { result, waitForNextUpdate } = renderHook(() => useGetSeasons());
      expect(result.current).toEqual({ loading: true });
      await waitForNextUpdate();
      expect(result.current.error?.reason).toBe(testError);
    });
  });

  describe("useGetSeasonDetails", () => {
    it("should return loading while loading and return data if call succeeds", async () => {
      const MOCK_SUCCESS_VALUE = { data: "testMockSuccess" };
      const testSeason = "2015";
      (getSeasonDetailsBySeason as jest.Mock).mockResolvedValueOnce(
        MOCK_SUCCESS_VALUE
      );
      const { result, waitForNextUpdate } = renderHook(() =>
        useGetSeasonDetails(testSeason)
      );
      expect(result.current).toEqual({ loading: true });
      expect(getSeasonDetailsBySeason).toBeCalledTimes(1);
      expect(getSeasonDetailsBySeason).toBeCalledWith(testSeason);
      await waitForNextUpdate();
      expect(result.current.data).toBe(MOCK_SUCCESS_VALUE.data);
    });
    it("should return error if call fails", async () => {
      const testError = "testError";
      const testSeason = "2015";
      (getSeasonDetailsBySeason as jest.Mock).mockRejectedValueOnce(testError);
      const { result, waitForNextUpdate } = renderHook(() =>
        useGetSeasonDetails(testSeason)
      );
      expect(result.current).toEqual({ loading: true });
      await waitForNextUpdate();
      expect(result.current.error?.reason).toBe(testError);
    });
  });
});
