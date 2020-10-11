import React from "react";
import { Button, CardContent, Chip } from "@material-ui/core";
import { mount, shallow } from "enzyme";
import { MOCK_RACE } from "../../service/Service.mock";
import RaceDetails from "./RaceDetails";

describe("RaceDetails", () => {
  it("should show a card with race details and winner details and a read more button with a link", () => {
    const wrapper = mount(<RaceDetails race={MOCK_RACE} highlight={false} />);
    expect(wrapper.find(CardContent).prop("className")).toBeDefined();
    const titleComponent = wrapper.find("h2#roundDetails");
    expect(titleComponent.prop("children")).toEqual(
      `Round: ${MOCK_RACE.round} - ${MOCK_RACE.raceName}`
    );
    const chips = wrapper.find(Chip);
    expect(chips).toHaveLength(2);
    const winnerChip = chips.at(0);
    const constructorChip = chips.at(1);
    expect(winnerChip.prop("label")).toEqual(
      `Winner: ${MOCK_RACE.Results[0].Driver.givenName}  ${MOCK_RACE.Results[0].Driver.familyName}`
    );
    expect(constructorChip.prop("label")).toEqual(
      `Constructor: ${MOCK_RACE.Results[0].Constructor.name}`
    );
    const readMoreButton = wrapper.find(Button);
    expect(readMoreButton.prop("href")).toEqual(MOCK_RACE.url);
  });
  it("should add a highlight class if passed highlight true", () => {
    const wrapper = shallow(<RaceDetails race={MOCK_RACE} highlight={true} />);
    expect(wrapper.find(CardContent).prop("className")).toBeDefined();
  });
});
