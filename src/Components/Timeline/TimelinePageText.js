import React from 'react';
import styled from 'styled-components'


const TextContainer = styled.div`
    margin-bottom: 10%;
    padding-top: 30px;
    padding-bottom: 30px;   
    
    margin-left: ${props => props.collagePosition === "left" ? "-2px":"" };
    border-left: ${props => props.collagePosition === "left" ? `6px solid ${props.highlightColor}` :"" };
    padding-left: ${props => props.collagePosition === "left" ? "50px":"" };

    margin-right: ${props => props.collagePosition === "right" ? "-2px":"" };
    border-right: ${props => props.collagePosition === "right" ? `6px solid ${props.highlightColor}` :"" };
    padding-right: ${props => props.collagePosition === "right" ? "50px":"" };

    &::before, &::after{
        content:"";
        display:block;
        position: relative;
        left:${props => props.collagePosition === "left" ? "-56px":"" };
        right:${props => props.collagePosition === "right" ? "-108.5%":"" };
        width:6px;
        background: ${props => props.theme.colors.text};
        height:20px;
    }

`

const Title = styled.h1`
    margin-top:0;
    margin-bottom:1em;
    font-family: ${props => props.theme.fonts.display};
    color: ${props => props.highlightColor};
    font-size:2.8em;
`

const Text = styled.div`
    padding:20px;
    padding-left:30px;
    //background-image: url(${require('../../assets/img/paper-background.jpg').default}) ;
    background-color: #F1F1F1;
    background-size:100%;
    box-shadow: 1px 1px 7px 5px rgba(0, 0, 0, 0.2);
    margin-bottom:50px;

    p{
        color: ${props => props.theme.colors.text};
        font-size:1.2em;
        line-height:1.5em;
    }
    `

const TimelinePageText = (props) => {



    return (
        <TextContainer collagePosition={props.collagePosition} highlightColor={props.highlightColor}>
            <Title highlightColor={props.highlightColor} >{props.title}</Title>
            <Text><p>{props.text}</p></Text>
        </TextContainer>
    );
};

export default TimelinePageText;