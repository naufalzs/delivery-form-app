import React from "react";
import NumberFormat from "react-number-format";
import { CardOptionStyled, CheckIcon } from "./styles/Card.styled";

export default function CardOption({ text, amount, onClick, active }) {
  return (
    <CardOptionStyled onClick={onClick} active={active}>
      <div>
        <p>{text}</p>
        <div>
          <NumberFormat
            value={amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={`Rp `}
            className="font-bold"
          />
        </div>
      </div>
      <CheckIcon active={active}/>
    </CardOptionStyled>
  );
}
