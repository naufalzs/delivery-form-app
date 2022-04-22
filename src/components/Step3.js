import React from 'react'
import BackLink from './BackLink'
import { FinishContainer } from './styles/Container.styled'
import { TextInfo, TextOrder } from './styles/FinishText.styled'
import Title from './Title'

export default function Step3() {
  return (
      <FinishContainer>
          <div>
              <Title textTitle="Thank you"/>
              <TextOrder>Order ID : XXKYB</TextOrder>
              <TextInfo>You order will be delivered with GO-SEND</TextInfo>
              <BackLink/>
          </div>
      </FinishContainer>
  )
}