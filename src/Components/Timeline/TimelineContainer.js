import React, {useRef, useState}  from 'react';
import styled from 'styled-components'
import {useElementInertialParallax} from '../../animations/Animations'

import TimelinePage from './TimelinePage'

const BackgroundImage = styled.img`
    position:absolute;
    margin-top:-70%;
    width:100%;
    filter: invert(75%);
`

const Wrapper = styled.div`
    position:absolute;
    width:100%;
    height:100%;
` 

const TimelineContainer = (props) => {

    const parallaxElement = useRef(null)
    const [parallaxOffset, setParallaxOffset] = useState(0)

    useElementInertialParallax((parallaxValue) => {
        setParallaxOffset(-10 + parallaxValue * 20)
    }, parallaxElement)

    return (
        <Wrapper>
            <BackgroundImage ref={parallaxElement} src={require('../../assets/img/math-background.png').default} style={ { transform: `translate3d(0,${parallaxOffset}%,0)` } }></BackgroundImage>
            { props.content.map( (pageContent, key) => {
                return(
                    <TimelinePage
                        key={key}
                        content={pageContent}>
                    </TimelinePage>
                )})
            }   
        </Wrapper>
    );
};

export default TimelineContainer;