import React from 'react';
import styled from 'styled-components'

const TextContainer = styled.div`
    margin-left: -2px;
    border-left: 7px solid red;
    padding-left: 50px;
    margin-bottom: 10%;
    padding-top: 30px;
    padding-bottom: 30px;    

    &::before, &::after{
        content:"";
        display:block;
        position: relative;
        left:-57px;
        width:6px;
        background: black;
        height:20px;
    }

    &::after{
        
    }
`

const Title = styled.h1`
    color: black;
`

const Text = styled.p`
    color: black;
`

const TimelinePageText = (props) => {
    return (
        <TextContainer>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </TextContainer>
    );
};

export default TimelinePageText;