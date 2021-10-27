import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByTestAtrr} from '../../Utils'

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
   const wrapper= findByTestAtrr(component,"headerComponent")
    
    expect(wrapper.length).toBe(1);
  });

  it("it should render a logo", () => {
    const wrapper= findByTestAtrr(component,"logoIMG")
    
    expect(wrapper.length).toBe(1);
  });
});
