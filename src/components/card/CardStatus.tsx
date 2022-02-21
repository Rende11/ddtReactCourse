import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from "styled-components";


interface Props {
    content: string
}


const Status = styled.div`
    text-align: left;
    margin-right: 0.5rem;
`

const Icon = styled.i`
    transition: transform 0.2s ease-in-out;
    flex-shrink: 0;
    margin-left: auto;
    color: ${props => props.error ? "var(--grey)" : "var(--black)" };
    cursor: ${props => props.error ? "not-allowed" : "pointer"};
    &:hover {
        transform:  ${props => props.error ? null : "scale(1.2)"};
    }
`

const Textarea = styled.textarea`
margin-right: 1rem;
padding: 0.5rem;
    flex-grow: 1;
    border: ${props => props.error ?  "1px solid var(--negative-color)" : "1px solid var(--grey)"};
    border-radius: 4px;
    color: var(--grey-text-color);
    font-size: 1.5rem;
    font-family: "Abel", "sans-serif";
    &:focus {
      outline: none; 
    }
`
const TextWithButton = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`

const Wrapper = styled.div``

const ErrorMsg = styled.div`
    color: var(--negative-color);
    margin-top: 0.25rem;
    text-align: left;
    font-size: 1rem;
`

const textMaxLength = 30;
const isTooLong = (text: string) => text.length > textMaxLength;

const CardStatus: FunctionComponent<Props> = (props: Props) => {
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(props.content);
    const [error, setError] = useState(isTooLong(text));
    
    const handleClick = () => {
        if (!error) {
            setEditable(curr => !curr);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!error) {
            /* cmd + enter key */
            if (e.metaKey && e.keyCode === 13) {
                setEditable(false);
            }
        }
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(error, isTooLong(text), text.length)
        let value = e.target.value;
        setText(value);

        if (isTooLong(value)) {
            setError(`Value to long... You need to remove ${value.length - textMaxLength} symbol(s)`);
        } else {
            setError(null);
        }
    };

    return (
        <Wrapper>
        <TextWithButton>
          {editable
          ? <Textarea
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              value={text}
             error={error}></Textarea>
          : <Status>{text}</Status>}
          <Icon className="fa fa-pencil fa-fw" aria-hidden="true" onClick={handleClick} error={error}></Icon>
        </TextWithButton>
        <ErrorMsg>{error}</ErrorMsg>
        </Wrapper>
    )
}

export default CardStatus;
