import { Typography } from "@material-ui/core";
import { mount } from "enzyme";
import React from "react";
import { Link, MemoryRouter } from "react-router-dom";
import AppBar from "./AppBar";

describe("AppBar", () => {
  it('should render a AppBar with title "F1 Dashboard" and a link to home on the logo icon', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/2005/JOHN"]}>
        <AppBar />
      </MemoryRouter>
    );
    const titleComponent = wrapper.find(Typography);
    const linkComponent = wrapper.find(Link);
    expect(titleComponent.prop("children")).toEqual("F1 Dashboard");
    expect(linkComponent.prop("to")).toEqual("/");
  });
});
