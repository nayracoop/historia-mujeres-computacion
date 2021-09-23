import React, {useRef, useState, useLayoutEffect}from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'
import ReactMarkdown from 'react-markdown'


const TextContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;   
  
    margin-left: ${props => props.collagePosition === "left" ? "-2px":"" };
    border-left: ${props => props.collagePosition === "left" ? `3px solid #666666` : "" };
    padding-left: ${props => props.collagePosition === "left" ? "50px":"" };
    margin-right: ${props => props.collagePosition === "right" ? "-2px":"" };
    border-right: ${props => props.collagePosition === "right" ? `3px solid #666666` :"" };
    padding-right: ${props => props.collagePosition === "right" ? "50px":"" };

`

const Title = styled(ReactMarkdown)`
    display: inline-block;

    h2{
        display: inline;
        margin-top:0;
        margin-bottom:1em;
        font-family: ${props => props.theme.fonts.display};
        line-height: 1.5em;
        color: #f7f3ad;
        font-size:2.8em;
        border-radius:10px;

        &::after{
            content:"()";
            color:#f7f3ad;
        }
    }

    h1{
        display: inline;
        margin-top:0;
        margin-bottom:1em;
        font-family: ${props => props.theme.fonts.display};
        line-height: 1.5em;
        color: #0db474;
        font-size:2.8em;
        border-radius:10px;

        &::before{
            content:"//";
        }
    }
`

const Text = styled(ReactMarkdown)`
    color: ${props => props.theme.colors.text};

    p{
        font-size:1.3em;
        line-height:1.8em;
        padding:50px; 
        padding-top:70px;
        padding-bottom:100px;
        padding-left:70PX;
        background-color: #1e1e1e;
        box-shadow: 1px 1px 7px 5px rgba(0, 0, 0, 0.2);
        margin-top:-25%;
        margin-bottom: -30%;
    }

    strong {
        display: inline;
        padding: 0 5px;
        background: linear-gradient(to right, #68cdfe50, #68cdfe60);
        background-repeat: no-repeat;
        transition: all ease-in-out .5s;   
        background-position: ${props => props.animate ? "0px" : "-1100px"}; 
    }
    `
const Bracket = styled.p`
        position: relative;
        font-size: 5em;
        line-height:0px;
        color: #a463d6;
        margin-left: ${props => props.position === "close" ? "90%" : "20px"};
        margin-top: ${props => props.position === "open" ? "100px" : "100px" }
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
                <Bracket position="open">{"{"}</Bracket>
                <Text animate={isOnScreen} children={props.text} highlightColor={props.highlightColor} ></Text>
                <Bracket position="close">{"}"}</Bracket>
        </TextContainer>
    );
};

export default TimelinePageText;