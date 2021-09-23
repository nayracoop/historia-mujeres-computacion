import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'

const Wrapper = styled.div`
    padding-top:100px;
    padding-bottom: 200px;
    width: 100%;
    max-width:${ props => props.theme.layout.l}px;
    min-height: 100vh;
    margin: 0 auto;

    h1{
        text-align: center;
        color: #FFFFFF;
        font-size:2.5em;
    }

    p{
        color:#FFFFFF;
        font-size: 1.5em;
        padding-top: 50px;
        width:90%;
        margin: 0 auto;

        strong {
            display: inline;
            padding: 0 5px;
            background: linear-gradient(to right, #68cdfe50, #68cdfe60);
            background-repeat: no-repeat;
            transition: all ease-in-out .5s;   
        }
    }
`; 

const Conclusion = (props) => {
    
    return (
        <Wrapper>
            <h1>Nuestra reflexión</h1>
            <Markdown>{props.content.paragraphs}</Markdown>
        </Wrapper>
    );
};

export default Conclusion;