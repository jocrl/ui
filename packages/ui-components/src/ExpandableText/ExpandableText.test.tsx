import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ExpandableText from "./ExpandableText";

describe("ExpandableText", () => {
  const text = "testing testing";
  it("should expand and collapse", () => {
    const { getByText } = render(
      <ExpandableText text={text} characterLimit={5} />,
    );

    const truncatedText = "testi...";
    getByText(truncatedText);
    fireEvent.click(getByText("Show More"));
    // userEvent.click(getByText("Show More"));
    getByText(text);
    fireEvent.click(getByText("Show Less"));
    // userEvent.click(getByText("Show Less"));
    getByText(truncatedText);
  });
});
