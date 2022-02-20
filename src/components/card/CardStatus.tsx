import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from "styled-components";


interface Props {
    content: ReactNode
}

    /*     flex-grow: 1; */
const Status = styled.div`
    text-align: left;
    margin-right: 0.5rem;
`

const Icon = styled.i`
    flex-shrink: 0;
    margin-left: auto;
    cursor: pointer;
      &:hover {
    transform: scale(1.1);
    }
`

const Textarea = styled.textarea`
    margin-right: 1rem;
    flex-grow: 1;
    border: 1px solid var(--grey);
    border-radius: 4px;
    color: var(--grey-text-color);
    font-size: 1.5rem;
    font-family: "Abel", "sans-serif";
    &:focus {
      outline: none; 
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`

const CardStatus: FunctionComponent<Props> = (props: Props) => {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(props.content);
    const handleClick = () => {
        console.log("click");
        setEditable(curr => !curr);
    };
    
    const handleKeyUp = (e) => {
        /* Enter key */
        if (e.keyCode === 13) {
            setEditable(false);
        }
    };
    const handleOnChange = (e) => setText(e.target.value);
    
    return (
        <Wrapper>
          {editable
          ? <Textarea
              onChange={handleOnChange}
              onKeyUp={handleKeyUp}
              value={text}></Textarea>
          : <Status>{text}</Status>}
          <Icon className="fa fa-pencil fa-fw" aria-hidden="true" onClick={handleClick}></Icon>
        </Wrapper>
    )
}

export default CardStatus;
