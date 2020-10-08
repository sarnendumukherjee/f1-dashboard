import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Routes from "./Routes";

jest.mock("./Routes", () => () => <span>Routes</span>);

describe("App", () => {
  describe("render tests", () => {
    it("should render Routes component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Routes).exists()).toBeTruthy();
    });
  });
});
