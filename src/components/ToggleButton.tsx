import React, { useState, ReactNode } from 'react';
import styled from "styled-components";

interface Props {
    content: ReactNode
}

const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 2px;
    padding: 2rem 3rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    font-size: 2rem;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 20px 20px rgba(50, 50, 50, 0.2);
    }
`

const ButtonWrapper = styled.div`
    height: 10rem;
`

export default function ToggleButton(props: Props) {
    const [show, setToggleState] = useState(false);

    return (
        <ButtonWrapper>
          <Button
           type="button"
           onClick={() => setToggleState((curr) => !curr)}>
            {show ? "Hide info" : "Show info"}
          </Button>
          {show ? props.content : null}
        </ButtonWrapper>
    );
}
