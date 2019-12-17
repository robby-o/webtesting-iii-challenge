// Test away

import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

test("Matches snapshot", () => {
  //AAA Arange, Act, Assert

  const locked = false;
  const closed = false;
  const tree = render(<Dashboard locked={locked} closed={closed} />);

  expect(tree.baseElement).toMatchSnapshot();
});
