import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../testHelpers";

import Copyright from "./Copyright";

describe("<Copyright />", () => {
  it("should render the Copyright component without crashing", () => {
    const helpers = renderWithRouter(<Copyright darkmode={false} />);
  });

  it("should match the snapshot of Copyright", () => {
    const tree = rendererWithRouter(<Copyright darkmode={false} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the copyright text to the screen", () => {
    const { getByText } = renderWithRouter(<Copyright darkmode={false} />);
    expect(getByText(/Copyright © 2019 Nathan Thomas/i)).toBeDefined();
  });
});
