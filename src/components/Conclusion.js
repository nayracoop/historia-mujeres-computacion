import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.div`
    padding-top:100px;
    width: 100%;
    min-height: 100vh;

    p{
        color:#FFFFFF;
        font-size: 2em;
        padding-top: 50px;
        width:90%;
        margin: 0 auto;
    }
`; 

const Conclusion = (props) => {
    return (
        <Wrapper>
            <ReactMarkdown>{props.content.paragraphs}</ReactMarkdown>
        </Wrapper>
    );
};

export default Conclusion;