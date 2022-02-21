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


const UserCard: FunctionComponent<Props> = ({ userData }: Props) => {
    return (
        <CardWrapper>
          <ContentWrapper>
            <Avatar img={userData.avatarUrl}/>
            <LinesWrapper>
              <CardLine label={userData.name.label} content={userData.name.content}/>
              <CardLine label={userData.surname.label} content={userData.surname.content}/>
              <CardLine label={userData.birthdate.label} content={userData.birthdate.content}/>
              <CardLine label={userData.gender.label} content={userData.gender.content}/>
              <CardLine label={userData.ceiling.label} content={userData.ceiling.content}/>
              <CardLine label={userData.mood.label} content={userData.mood.content}/>
            </LinesWrapper>
          </ContentWrapper>
          <CardStatus content={userData.status}/>
        </CardWrapper>
        
    )
}

export default UserCard;
