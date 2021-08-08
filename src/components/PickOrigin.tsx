import * as React from "react";
import { PadBox } from "@bedrock-layout/padbox";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { rollDice } from "../utils";

import styled from "styled-components";

import { VisuallyHidden } from "@reach/visually-hidden";
export type Origin = "ALTERED_HUMAN" | "MUTANT" | "HI_TECH" | "ROBOT" | "ALIEN";

const RadioBox = styled(PadBox).attrs(() => ({ as: "label", padding: "lg" }))<{
  $checked?: boolean;
}>`
  cursor: pointer;
  background-color: ${(props) => (props.$checked ? "lightgrey" : "white")};
  border-radius: var(--border-radius-rounded-lg);
  box-shadow: 0 0 2px;
`;

const OriginGroup = styled(InlineCluster).attrs(() => ({ as: "fieldset" }))`
  border: none;
`;

const InputRadio: React.FC<
  { label: string; value: Origin } & React.ComponentPropsWithoutRef<"input">
> = ({ label, value, ...props }) => {
  return (
    <RadioBox $checked={props.checked}>
      {label}
      <VisuallyHidden
        as="input"
        onChange={() => void 0}
        {...props}
        value={value}
        type="radio"
        name="origin"
      />
    </RadioBox>
  );
};

function setRandomOrigin(): Origin {
  const roll = rollDice(100);
  switch (true) {
    case roll <= 30:
      return "ALTERED_HUMAN";
    case roll > 30 && roll <= 60:
      return "MUTANT";
    case roll > 60 && roll <= 90:
      return "HI_TECH";
    case roll > 90 && roll <= 95:
      return "ROBOT";
    case roll > 95:
      return "ALIEN";
  }
}

export function PickOrigin(): React.ReactNode {
  const [origin, setOrigin] = React.useState("");
  return (
    <PadBox
      as="form"
      padding="lgXl"
      onChange={({ target: { value } }) => {
        setOrigin(value);
      }}
    >
      <OriginGroup gutter="md">
        <legend>Pick Your Origin</legend>
        <InputRadio
          checked={origin === "ALTERED_HUMAN"}
          label="Altered Human"
          value="ALTERED_HUMAN"
        />
        <InputRadio
          checked={origin === "MUTANT"}
          label="Mutant"
          value="MUTANT"
        />
        <InputRadio
          checked={origin === "HI_TECH"}
          label="Hi-Tech"
          value="HI_TECH"
        />
        <InputRadio checked={origin === "ROBOT"} label="Robot" value="ROBOT" />
        <InputRadio checked={origin === "ALIEN"} label="Alien" value="ALIEN" />
        <button onClick={() => setOrigin(setRandomOrigin())} type="button">
          Pick Random Origin
        </button>
      </OriginGroup>
      <div></div>
    </PadBox>
  );
}
