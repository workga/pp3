import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "../Components/Home"

configure({ adapter: new Adapter() });

describe("Home", () => {
 it("renders correctly", () => {
   shallow(<Home />);
 });
});