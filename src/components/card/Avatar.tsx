import React, { FunctionComponent, ReactNode } from 'react';
import styled from "styled-components";


interface Props {
    img: string
}

const Img = styled.img`
    border-radius: 10px;
    width: 220px;
    height: 220px;
`

const Avatar: FunctionComponent<Props> = (props: Props) => {
    return (
        <div>
          <Img src={props.img}/>
        </div>
    )
}

export default Avatar;
