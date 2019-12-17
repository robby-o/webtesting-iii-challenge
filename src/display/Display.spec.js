// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Display from "./Display";

test("when closed, displays red", () => {
  let closed = false;
  let locked = false;

  const { container, getByText } = render(
    <Display closed={closed} locked={locked} />
  );
  container.classList.contains("red-led");
});
