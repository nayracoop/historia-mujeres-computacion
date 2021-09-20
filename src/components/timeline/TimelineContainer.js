import React, {useLayoutEffect, useRef, useState}  from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'
import { Animation } from 'react-web-animation'

import Cover from '../Cover'
import TimelinePage from './TimelinePage'

const BackgroundImage = styled.div`
    background-image:url(${require('../../assets/img/math-background.png').default});
    width:100%;
    height:100%;
    position:absolute;
    width:100%;
    filter: invert(75%);
    z-index:-1;
    opacity:.5;
    transform:translateZ(-400px);
`

const Wrapper = styled.div`
    position: relative;
    width:100%;   
    transformStyle: preserve-3d;
    perspective: 500px;
    z-index:-1;
` 

const TimelineContainer = (props) => {
    
    const pieceRef = useRef(null)
    const scrollPosition = HandleScroll()
    const [backgroundTranslation, setBackgroundTranslation] = useState(scrollPosition)

    const HandleBackgroundPosition = () => {
        const backgroundPosition = pieceRef.current.getBoundingClientRect().top;

        return backgroundPosition
    }

    const getKeyframes = () => {
        if (scrollPosition > 0 ) {
            return [
                { transform: `translateY(${backgroundTranslation}px)`,offset: 0 },
            ];
        } else {
            return [
                { transform: `translateY(0px)`,offset: 0 },
            ];
        }
    }

    const getTiming =( duration) => {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    useLayoutEffect ( () => {
        console.log(backgroundTranslation)
        console.log(scrollPosition)
        console.log(HandleBackgroundPosition())
        console.log("--")
        setBackgroundTranslation(scrollPosition + HandleBackgroundPosition()*0.5)
    })

    return (
        <Wrapper ref={pieceRef}>
            <Animation keyframes = { getKeyframes() } timing={getTiming(50000)}>
                <BackgroundImage></BackgroundImage>
            </Animation>
            <Cover content={props.coverContent}></Cover>
            { props.content.map( (pageContent, key) => {
                return(
                    <TimelinePage
                        scrollPosition={props.scrollPosition}
                        key={key}
                        content={pageContent}>
                    </TimelinePage>
                )})
            }   
        </Wrapper>
    );
};

export default TimelineContainer