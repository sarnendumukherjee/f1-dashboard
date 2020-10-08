import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SeasonDetails from "./pages/season-details/SeasonDetails";
import Routes from "./Routes";

jest.mock("./pages/dashboard/Dashboard", () => () => <span>Dashboard</span>);
jest.mock("./pages/season-details/SeasonDetails", () => () => (
  <span>SeasonDetails</span>
));

describe("Routes", () => {
  describe("render tests", () => {
    it("should render Dashboard by default", () => {
      const wrapper = mount(
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(Dashboard).exists()).toBeTruthy();
    });
    it("should render SeasonDetails for the url /:year/:winner", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/2015/john"]}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(SeasonDetails).exists()).toBeTruthy();
    });
    it("should render Dashboard for any other URL", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["any-other-url"]}>
          <Routes />
        </MemoryRouter>
      );
      expect(wrapper.find(Dashboard).exists()).toBeTruthy();
    });
  });
});
