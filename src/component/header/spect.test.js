import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("it should render without errors", () => {
    console.log(component.debug());

    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("it should render a logo", () => {
    const logo = component.find(".logoIMG");
    expect(logo.length).toBe(1);
  });
});
