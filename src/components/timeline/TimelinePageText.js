import React, {useRef, useState, useLayoutEffect}from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'
import ReactMarkdown from 'react-markdown'


const TextContainer = styled.div`
    margin-bottom: 10%;
    padding-top: 30px;
    padding-bottom: 30px;   
  
    margin-left: ${props => props.collagePosition === "left" ? "-2px":"" };
    border-left: ${props => props.collagePosition === "left" ? `6px solid ${props.highlightColor}` : "" };
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

const Title = styled(ReactMarkdown)`
    display: inline-block;
    margin-bottom: 2em;

    h1{
        display: inline;
        padding: 0 10px;
        margin-top:0;
        margin-bottom:1em;
        font-family: ${props => props.theme.fonts.display};
        line-height: 1.5em;
        color: #f9f9f9;
        background-color: ${props => props.highlightColor};
        font-size:2.8em;
    }
`

const Text = styled(ReactMarkdown)`
    padding:20px;
    padding-left:30px;
    background-color: #F1F1F1;
    background-size:100%;
    box-shadow: 1px 1px 7px 5px rgba(0, 0, 0, 0.2);
    margin-bottom:50px;

    color: ${props => props.theme.colors.text};
    font-size:1.2em;
    line-height:1.5em;

    strong {
        display: inline;
        padding: 0 5px;
        background: linear-gradient(to right, ${props => props.highlightColor + 'CC' }, ${props => props.highlightColor + '73'});
        background-repeat: no-repeat;
        transition: all ease-in-out .5s;   
        background-position: ${props => props.animate ? "0px" : "-1100px"}; 
    }
    `

const TimelinePageText = (props) => {
    HandleScroll()

    const positionRef = useRef(null)
    const [isOnScreen, setIsOnScreen] = useState(false)
    
    const HandleTextPosition = () => {    
        const position = positionRef.current.getBoundingClientRect().top;
        const containerHeight = window.innerHeight
        const onScreenLimit = containerHeight/3

        if(position < containerHeight - onScreenLimit){
            setIsOnScreen(true)
        } else {
            setIsOnScreen(false) 
        }

    }
    
    useLayoutEffect(()=>{
        HandleTextPosition()
    })

    return (
        <TextContainer ref={positionRef} collagePosition={props.collagePosition} highlightColor={props.highlightColor}>
                <Title children={props.title} highlightColor={props.highlightColor} ></Title>
                <Text animate={isOnScreen} children={props.text} highlightColor={props.highlightColor} ></Text>
        </TextContainer>
    );
};

export default TimelinePageText;