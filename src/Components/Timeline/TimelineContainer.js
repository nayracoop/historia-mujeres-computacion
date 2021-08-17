import React, {useRef, useState}  from 'react';
import styled from 'styled-components'

import TimelinePage from './TimelinePage'

const BackgroundImage = styled.img`
    position:absolute;
    margin-top:-70%;
    width:100%;
    filter: invert(75%);
    z-index:-1;
`

const Wrapper = styled.div`
    position: relative;
    width:100%;
` 

const TimelineContainer = (props) => {

    return (
        <Wrapper>
            <BackgroundImage src={require('../../assets/img/math-background.png').default}></BackgroundImage>
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