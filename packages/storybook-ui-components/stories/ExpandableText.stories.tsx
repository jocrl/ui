import React from "react";
import { storiesOf } from "@storybook/react";

import { ExpandableText } from "@cockroachlabs/ui-components";

const text = "testing testing";

storiesOf("ExpandableText", module)
  .add("Text exceeds length", () => (
    <ExpandableText text={text} characterLimit={5} />
  ))
  .add("Text is within length", () => (
    <ExpandableText text={text} characterLimit={50} />
  ));
