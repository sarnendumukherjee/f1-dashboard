import React from "react";
import { mount } from "enzyme";
import Dashboard from "./Dashboard";
import { useGetSeasons } from "../../service/Services.hook";
import { MOCK_GET_SEASONS } from "../../service/Service.mock";
import { MemoryRouter } from "react-router-dom";
import SeasonListItem from "../../components/season-list-item/SeasonListItem";
import Loader from "../../components/loader/Loader";
import { Alert } from "@material-ui/lab";

jest.mock("../../service/Services.hook", () => ({
  useGetSeasons: jest.fn(),
}));

describe("Dashboard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should display a dashboard page which lists the seasons", () => {
    (useGetSeasons as jest.Mock).mockReturnValueOnce({
      data: MOCK_GET_SEASONS,
    });
    const wrapper = mount(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(wrapper.find(Loader).exists()).toBeFalsy();
    expect(wrapper.find(Alert).exists()).toBeFalsy();

    const titleComponent = wrapper.find("h5#title");
    expect(titleComponent.prop("children")).toEqual(
      "F1 World Champions (2005 - 2015)"
    );
    const seasonListItems = wrapper.find(SeasonListItem);
    expect(seasonListItems).toHaveLength(
      MOCK_GET_SEASONS.MRData.StandingsTable.StandingsLists.length
    );
    expect(seasonListItems.at(0).prop("season")).toBe(
      MOCK_GET_SEASONS.MRData.StandingsTable.StandingsLists[0]
    );
  });
  it("should display a loader while loading", () => {
    (useGetSeasons as jest.Mock).mockReturnValueOnce({
      loading: true,
    });
    const wrapper = mount(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(wrapper.find(Loader).exists()).toBeTruthy();
  });
  it("should display an Error in case of error", () => {
    (useGetSeasons as jest.Mock).mockReturnValueOnce({
      error: { reason: "testErrorReason" },
    });
    const wrapper = mount(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(wrapper.find(Alert).exists()).toBeTruthy();
  });
});
