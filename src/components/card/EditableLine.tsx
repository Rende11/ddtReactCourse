import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from "styled-components";
import CardLine from './CardLine';






const EditableLine = (props) => {
    
    /* Как правильно пробрасывать он-клик?*/
    return (
        <Wrapper>
        <CardLine
          // onClick={handleClick}
           label={props.label}
           content={editable
                  ? text
                  : text}/>
              
        </Wrapper>
        
    )
}

export default EditableLine;
