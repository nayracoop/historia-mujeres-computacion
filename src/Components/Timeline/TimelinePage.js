import React from 'react';
import styled from 'styled-components'
import TimelinePageText from './TimelinePageText'

const Wrapper = styled.div`
    width: 100%;
    height:100%;
`

const TimelinePage = (props) => {
    let content = props.content
    return (
        <Wrapper>
            <TimelinePageText
                title={content.title}
                text={content.text}>
            </TimelinePageText>
        </Wrapper>
    );
};

export default TimelinePage;