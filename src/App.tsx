import * as React from "react";
import { Center } from "@bedrock-layout/center";
import { PickOrigin, Origin } from "./components/PickOrigin";

type Character = {
  origin?: Origin;
};

type ACTIONTYPE = { type: "SET_ORIGIN"; payload: "number" };

const initialState = {};

function reducer(state: Character, action: ACTIONTYPE): Character {
  switch (action.type) {
    case "SET_ORIGIN":
      return {};
    default:
      throw new Error();
  }
}

export default function App() {
  const { character, dispatch } = React.useReducer(reducer, initialState);
  return (
    <div>
      <Center as="header" centerText>
        <h1>Marver Super Heroes Character Creator</h1>
        <span>F.A.C.E. R.I.P.</span>
      </Center>
      <PickOrigin />
    </div>
  );
}
