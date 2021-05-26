import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'

const Wrapper = styled.div `
    width:100%;
    height:100vh;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    
    @media (max-width : ${props => props.theme.layout.l}px){
        overflow-x: hidden;
    }
`

const Layout = styled.div`
    height:100%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    @media (max-width : ${props => props.theme.layout.m}px){
        width:90%;
        margin:0 auto;
    }
`;


const TitleSection = styled.div`
    text-align: center;
    self-align:bottom;
    z-index: 999;
`;

const CollageSection = styled.div`
    
`;

const Title = styled(Markdown)`
    font-family:${props => props.theme.fonts.display};
    line-height: 1.8em;
    font-size: 3.5em;
    font-weight:500;
    display: inline; 
        p{
            border-radius: 10px;
            padding:20px;
            background-color: ${props => props.color};   
            color: #e4e2e1;
        }
    }
`



const StatisticsCover = (props) => {
    return (
        <Wrapper>
           <Layout>
           <CollageSection></CollageSection>
                <TitleSection>
                    <Title color= {props.color}>{props.coverContent.title}</Title>
                </TitleSection>
           </Layout>
        </Wrapper>
    );
};

export default StatisticsCover;