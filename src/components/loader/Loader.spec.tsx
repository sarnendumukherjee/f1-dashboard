import React from "react";
import { shallow } from "enzyme";
import { CircularProgress } from "@material-ui/core";
import Loader from "./Loader";

describe("Loader", () => {
  it('should render a "CircularProgress"', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(CircularProgress).exists()).toBeTruthy();
  });
});
