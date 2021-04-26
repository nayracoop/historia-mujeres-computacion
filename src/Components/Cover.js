import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'

const Wrapper = styled.div`
    min-width:100%;
    height:100%;
` 
const Title = styled(Markdown)`

`

const Cover = (props) => {
    const content = props.content
    return (
        <Wrapper>
            <Title>{content.title}</Title>
        </Wrapper>
    );
};

export default Cover;