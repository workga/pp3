import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import NotFound from "../Components/NotFound"

configure({ adapter: new Adapter() });

describe("NotFound", () => {
 it("renders correctly", () => {
   shallow(<NotFound />);
 });
});