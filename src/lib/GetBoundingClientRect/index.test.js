import React from "react";
import { mount } from "enzyme";
import { GetBoundingClientRect } from "./GetBoundingClientRect";

describe("GetBoundingClientRect", () => {
  it("renders properly", () => {
    const wrapper = mount(<GetBoundingClientRect />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders with correct initial state", () => {
    const wrapper = mount(<GetBoundingClientRect />);
    expect(wrapper.state()).toEqual({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    });
  });
  it("renders with correct render component", () => {
    const wrapper = mount(
      <GetBoundingClientRect render={() => <div className="test" />} />,
    );
    expect(wrapper.find(".test").exists()).toBe(true);
  });
});
