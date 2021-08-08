import * as React from "react";
import { PadBox } from "@bedrock-layout/padbox";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { rollDice } from "../utils";

import styled from "styled-components";

export type Origin = "ALTERED_HUMAN" | "MUTANT" | "HI_TECH" | "ROBOT" | "ALIEN";

type RadioBoxProps = {
  $checked?: boolean;
};

const RadioBox = styled(PadBox)<RadioBoxProps>`
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
    <RadioBox as="label" padding="lg" $checked={props.checked}>
      {label}
      <input
        onChange={() => void 0}
        {...props}
        value={value}
        type="radio"
        name="origin"
        style={{
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: "1px",

          // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }}
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
    default:
      throw new Error("incorrect roll");
  }
}

export const PickOrigin: React.FC = () => {
  const [origin, setOrigin] = React.useState("");
  return (
    <PadBox
      as="form"
      padding="lgXl"
      onChange={(e: React.FormEvent<HTMLFormElement>) => {
        //@ts-ignore
        setOrigin(e.target.value);
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
};
