import React from "react";
import CardOption from "./CardOption";
import { ChooserContainer } from "./styles/Container.styled";
import Title from "./Title";

export default function Step2() {
  return (
    <>
      <Title textTitle="Shipments" />
      <ChooserContainer>
        <CardOption />
        <CardOption />
        <CardOption />
        <CardOption />
      </ChooserContainer>
      <Title textTitle="Payment" />
      <ChooserContainer></ChooserContainer>
    </>
  );
}
