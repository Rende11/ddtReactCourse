import React, { FunctionComponent, ReactNode } from 'react';
import styled from "styled-components";


interface Props {
    content: ReactNode
}

const Status = styled.div`
    text-align: left;
    margin-top: 0.5rem;
`

const CardStatus: FunctionComponent<Props> = (props: Props) => {
    return (
        <Status>{props.content}</Status>
    )
}

export default CardStatus;
