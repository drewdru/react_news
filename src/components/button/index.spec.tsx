import { screen } from '@testing-library/react';
import { fireEvent, render } from "@testing-library/react";

import { Button } from "./index";

describe("Button component testing with testing-library", () => {
  it("renders without crashing", () => {
    const view = render(<Button onClick={() => undefined} />);

    expect(view).toBeTruthy();
  });

  it("button is clickable", () => {
    const mockFn = jest.fn();
    render(<Button onClick={mockFn} />);

    const btn = screen.getByTestId("btn");
    fireEvent.click(btn);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
