import React, { FunctionComponent, ReactNode } from 'react';
import styled from "styled-components";

/* Какой правильный тип для функции? */
interface Props {
    label: ReactNode,
    content: ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}


const Line = styled.div`
    display: flex;
    text-align: left;
    margin: 1px 0;
`

const Label = styled.span`
    color: var(--grey-text-color);
`

const Content = styled.span`
    margin-left: 0.25rem;
`


const CardLine: FunctionComponent<Props> = (props) => {
  return (
    <Line onClick={props.onClick}>
      <Label>{props.label}:</Label>
      <Content>{props.content}</Content>
    </Line>
    )
}

export default CardLine;
