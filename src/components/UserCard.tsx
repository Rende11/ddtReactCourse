import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import Avatar from './card/Avatar';
import CardLine from './card/CardLine';
import CardStatus from './card/CardStatus';
import EditableLine from './card/EditableLine';

interface Props {
}


const CardWrapper = styled.div`
    background-color: white;
    border: 3px solid white;
    border-radius: 4px;
    margin: 1rem;
    padding: 1rem;
    width: 70%;
`

const ContentWrapper = styled.div`
    display: flex;
`

const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
    min-width: 14rem;
`


const UserCard: FunctionComponent<Props> = (props: Props) => {
    return (
        <CardWrapper>
          <ContentWrapper>
            <Avatar img="https://i.pravatar.cc/220"/>
            <LinesWrapper>
              <CardLine label="Name" content="John"/>
              <CardLine label="Surname" content="Doe"/>
              <CardLine label="Birthdate" content="Unknown"/>
              <CardLine label="Gender" content="Both"/>
              <CardLine label="Ceiling" content="Wooden"/>
              <CardLine label="Mood" content="ZBS"/>
            </LinesWrapper>
          </ContentWrapper>
          <CardStatus content="Only Clojure is good enough..."/>     
        </CardWrapper>
        
    )
}

export default UserCard;
