import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from "styled-components";
import CardLine from './CardLine';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Textarea = styled.textarea`
    border: 1px solid white;
    border-radius: 4px;
    background-color: #dd6a45;
    color: white;
    font-size: calc(10px + 2vmin);
    &:focus {
      outline: none; 
    }
`

const Icon = styled.i`
   margin: 0 0.5rem;
   cursor: pointer;
`

const EditableLine = (props) => {
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
    
    /* Как правильно пробрасывать он-клик?*/
    return (
        <Wrapper>
        <CardLine
          // onClick={handleClick}
           label={props.label}
           content={editable
                  ? <Textarea cols="10" onChange={handleOnChange} onKeyUp={handleKeyUp} value={text}></Textarea>
                  : text}/>
              <Icon className="fa fa-pencil fa-fw" aria-hidden="true" onClick={handleClick}></Icon>
        </Wrapper>
        
    )
}

export default EditableLine;
