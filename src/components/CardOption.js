import React from "react";
import { CardOptionStyled, CheckIcon } from "./styles/Card.styled";

export default function CardOption() {
  return (
    <CardOptionStyled>
      <div>
        <p>title</p>
        <div>10,000</div>
      </div>
      <CheckIcon />
    </CardOptionStyled>
  );
}
