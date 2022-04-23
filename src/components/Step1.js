import React from "react";
import Input from "./Input";
import { FormContainer } from "./styles/Container.styled";
import TextArea from "./TextArea";
import Title from "./Title";

export default function Step1() {
  return (
    <>
      <Title textTitle="Delivery details" checkbox />
      <FormContainer>
        <Input placeholder="Email" />
        <Input placeholder="Dropshipper name" disabled />
        <Input placeholder="Phone Number" />
        <Input placeholder="Dropshipper phone number" />
        <TextArea placeholder="Delivery Address" />
      </FormContainer>
    </>
  );
}
