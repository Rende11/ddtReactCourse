import React from 'react';
import styled from 'styled-components';

interface Props {
    
}

interface State {
    date: Date;
}

const ClockDiv = styled.div`
    width: 20rem;
`

export default class Clock extends React.Component<Props, State> {
    timerID?: number;

    constructor(props: Props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }
    
    render() {
        return (
            <ClockDiv>
              <h2>Now: {this.state.date.toLocaleTimeString()}</h2>
            </ClockDiv>);
    }}
