import React from "react";
import { ArrowBackLink, BackLinkContainer } from "./styles/BackLink.styled";

export default function BackLink() {
  return (
    <>
      <BackLinkContainer>
        <ArrowBackLink />
        <p>Back to cart</p>
      </BackLinkContainer>
    </>
  );
}
