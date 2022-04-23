import RandExp from "randexp";
import React from "react";
import { useSelector } from "react-redux";
import BackLink from "./BackLink";
import { FinishContainer } from "./styles/Container.styled";
import { TextInfo, TextOrder } from "./styles/FinishText.styled";
import Title from "./Title";

export default function Step3() {
  const orderID = useSelector((state) => state.user.orderID);
  return (
    <FinishContainer>
      <div>
        <Title textTitle="Thank you" />
        <TextOrder>Order ID : {orderID}</TextOrder>
        <TextInfo>You order will be delivered with GO-SEND</TextInfo>
        <BackLink />
      </div>
    </FinishContainer>
  );
}
