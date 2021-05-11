import React from 'react';
import styled from 'styled-components'

import TimelinePage from './TimelinePage'

const Wrapper = styled.div`
    min-width:100%;
    height:100%;
` 

const TimelineContainer = (props) => {

    return (
        <Wrapper>
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