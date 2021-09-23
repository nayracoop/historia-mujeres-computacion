import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div `
    width:100%;
    min-height:100vh;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    
    @media (max-width : ${props => props.theme.layout.l}px){
        overflow-x: hidden;
    }
`

const TitleSection = styled.div`
    z-index: 999;
    padding-top:25%;
    margin-top:100px;
`;

const Title = styled.h1`
    font-family:${props => props.theme.fonts.display};
    font-size: 3em;
    text-align: left;
    color: #f7f3ad; 

    &::after{
        content:"()";
        margin-left:5px;
    }
`

const Subtitle = styled.h2`
    font-size: 5em;
    line-height:1em;
    margin-top: 20px;
    display:block;
    color:#68cdfe;

    &::before, ::after{
        content:"{";
        display:inline-block;
        color: #a463d6;
        margin-right:10px;
    }

    &::after{
        content: "}";
        margin-left:10px;
    }
`

const Note = styled.p`
    color: #0db474;
    font-size:2em;

    &::before{
        content:"//";
    }
`


const StatisticsCover = (props) => {
    return (
        <Wrapper>
            <TitleSection>
                <Title >{props.coverContent.title}</Title>
                <Subtitle>{props.coverContent.subtitle}</Subtitle>
                <Note>{props.coverContent.note}</Note>
            </TitleSection>
        </Wrapper>
    );
};

export default StatisticsCover;