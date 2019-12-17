// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "../dashboard/Dashboard";

test("close gate displays closed door", () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  getByText(/closed/i);
});

test("lock gate displays locked door", () => {
  const { getByText } = render(<Dashboard />);

  const gateButton = getByText(/close gate/i);
  fireEvent.click(gateButton);

  const lockButton = getByText(/lock gate/i);
  fireEvent.click(lockButton);

  getByText(/locked/i);
});

test("lock gate is disabled when door is open", () => {
  const { getByText } = render(<Dashboard />);

  const gateButton = getByText(/lock gate/i);
  fireEvent.click(gateButton);

  getByText(/lock gate/i);
});
