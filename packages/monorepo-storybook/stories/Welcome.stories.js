import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Welcome from "../../components/Welcome";
storiesOf("Welcome", module).add("Welcome component", () => (
  <Welcome name="Harsha"></Welcome>
));
