import React from "react";
import { mount } from "enzyme";
import SeasonListItem from "./SeasonListItem";
import { MOCK_SEASON } from "../../service/Service.mock";
import { Link, MemoryRouter } from "react-router-dom";
import { ListItemText } from "@material-ui/core";

describe("SeasonListItem", () => {
  it("should render a season and winner data wrapped with a link to correct season details", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SeasonListItem season={MOCK_SEASON} />
      </MemoryRouter>
    );
    const {
      givenName,
      familyName,
      code,
    } = MOCK_SEASON.DriverStandings[0].Driver;
    const fullName = `${givenName} ${familyName}`;
    const linkComponent = wrapper.find(Link);
    expect(linkComponent.prop("to")).toEqual(`/${MOCK_SEASON.season}/${code}`);
    expect(wrapper.find(ListItemText).prop("secondary")).toEqual(
      `Champion : ${fullName}`
    );
  });
});
