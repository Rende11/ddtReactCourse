import React, { useState, ReactNode } from 'react';
import styled from "styled-components";

interface Props {
    content: ReactNode
}

const Button = styled.button`
    color: white;
    background-color: maroon;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    
    &:hover {
      transform: scale(1.1);
    }
`

export default function ToggleButton(props: Props) {
    const [show, setToggleState] = useState(false);

    return (
        <div>
          <Button
           type="button"
           onClick={() => setToggleState((curr) => !curr)}>
            Show info
          </Button>
          {show ? props.content : null}
        </div>
    );
}
