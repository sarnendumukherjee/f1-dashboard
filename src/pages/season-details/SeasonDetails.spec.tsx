import React from "react";
import { mount } from "enzyme";
import SeasonDetails from "./SeasonDetails";
import { useGetSeasonDetails } from "../../service/Services.hook";
import { MOCK_GET_SEASON_DETAILS } from "../../service/Service.mock";
import { MemoryRouter } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { Alert } from "@material-ui/lab";
import RaceDetails from "../../components/race-details/RaceDetails";

jest.mock("../../service/Services.hook", () => ({
  useGetSeasonDetails: jest.fn(),
}));

describe("SeasonDetails", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should display a dashboard page which lists the seasons", () => {
    (useGetSeasonDetails as jest.Mock).mockReturnValueOnce({
      data: MOCK_GET_SEASON_DETAILS,
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/2015/john"]}>
        <SeasonDetails />
      </MemoryRouter>
    );
    expect(wrapper.find(Loader).exists()).toBeFalsy();
    expect(wrapper.find(Alert).exists()).toBeFalsy();

    const titleComponent = wrapper.find("h4#title");
    expect(titleComponent.prop("children")).toContain("Season Details");
    const raceDetailsList = wrapper.find(RaceDetails);
    expect(raceDetailsList).toHaveLength(
      MOCK_GET_SEASON_DETAILS.MRData.RaceTable.Races.length
    );
    expect(raceDetailsList.at(0).prop("race")).toBe(
      MOCK_GET_SEASON_DETAILS.MRData.RaceTable.Races[0]
    );
  });
  it("should display a loader while loading", () => {
    (useGetSeasonDetails as jest.Mock).mockReturnValueOnce({
      loading: true,
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/2015/john"]}>
        <SeasonDetails />
      </MemoryRouter>
    );
    expect(wrapper.find(Loader).exists()).toBeTruthy();
  });
  it("should display an Error in case of error", () => {
    (useGetSeasonDetails as jest.Mock).mockReturnValueOnce({
      error: { reason: "testErrorReason" },
    });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/2015/john"]}>
        <SeasonDetails />
      </MemoryRouter>
    );
    expect(wrapper.find(Alert).exists()).toBeTruthy();
  });
});
