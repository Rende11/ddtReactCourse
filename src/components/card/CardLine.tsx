import React, { FunctionComponent, ReactNode } from 'react';
import styled from "styled-components";


interface Props {
    label: ReactNode,
    content: ReactNode
}


const Line = styled.div`
    text-align: left;
`

const Label = styled.span`
    color: antiquewhite;
`

const Content = styled.span`
    margin-left: 0.25rem;
`


const CardLine: FunctionComponent<Props> = (props) => {
  return (
    <Line>
      <Label>{props.label}:</Label>
      <Content>{props.content}</Content>
    </Line>
    )
}

export default CardLine;
