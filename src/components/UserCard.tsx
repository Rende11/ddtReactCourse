import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import Avatar from './card/Avatar'
import CardLine from './card/CardLine'
import CardStatus from './card/CardStatus'

interface Props {
}


const CardWrapper = styled.div`
    border: 3px solid white;
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
`

const ContentWrapper = styled.div`
    display: flex;
`

const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`


const UserCard: FunctionComponent<Props> = (props: Props) => {
    return (
        <CardWrapper>
          <ContentWrapper>
            <Avatar img="https://i.pravatar.cc/220"/>
            <LinesWrapper>
              <CardLine label="Name" content="Nikolay"/>
              <CardLine label="Surname" content="Doe"/>
              <CardLine label="Birthdate" content="10.10.1738"/>
              <CardLine label="Gender" content="Both"/>
              <CardLine label="Ceiling" content="Wooden"/>
            </LinesWrapper>
          </ContentWrapper>
          <CardStatus content="Only Clojure is good enough"/>     
        </CardWrapper>
        
    )
}

export default UserCard;
