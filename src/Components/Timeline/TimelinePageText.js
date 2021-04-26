import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    color: black;
`

const Text = styled.p`
    color: black;
`

const TimelinePageText = (props) => {
    return (
        <div>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </div>
    );
};

export default TimelinePageText;