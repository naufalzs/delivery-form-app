import React from "react";
import { FormContainer } from "./styles/Container.styled";
import { InputStyled, TextareaStyled } from "./styles/Input.styled";
import Title from "./Title";

export default function Step1() {
  return (
    <>
      <Title textTitle="Delivery details" checkbox />
      <FormContainer>
        <InputStyled placeholder="Email" />
        <InputStyled placeholder="Dropshipper name" />
        <InputStyled placeholder="Phone Number" />
        <InputStyled placeholder="Dropshipper phone number" />
        <TextareaStyled placeholder="Delivery Address" rows={4} />
      </FormContainer>
    </>
  );
}