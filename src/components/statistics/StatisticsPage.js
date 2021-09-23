import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'

const Wrapper = styled.div`
    width:100%;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    color: ${props => props.color};
    min-height:100vh;
    
    @media (max-width : ${props => props.theme.layout.l}px){
        overflow-x: hidden;
    }
`
const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width : ${props => props.theme.layout.m}px){
        width:90%;
        margin:0 auto;
        grid-template-columns: 1fr;
    }
`
const Info = styled.div`
    padding-top:150px;
`;

const IllustrationSection = styled.div`
    position:relative;
    align-self:top;

    left:${props => props.collagePosition === "left" ? "-20%":"" };
    right:${props => props.collagePosition === "right" ? "-20%":"" };
    order:${props => props.collagePosition === "right" ? 2 : "" };
`;

const Image = styled.img`
    width: 100%;
    margin: 0 auto;
`

const SectionTitle= styled.h2`
    border-radius: 10px;
    font-size: 3em;
    color:#f7f3ad;

    &::after{
        content: "()";
        margin-left: 10px;
    }
    
`

const SectionTexts= styled(Markdown)`
    color: #FFFFFF;
    font-size: 1.3em;
    line-height:1.8em;
    margin-left:70px;

    &::before, ::after{
        content:"{";
        color: #a463d6;
        margin-left:-70px;
        font-size: 3em;
    }

    &::after{
        content:"}";
        color: #a463d6;
        margin-right:100px;
        font-size: 3em;
    }
`

const GraphicsSection = styled.div`
    
`


const StatisticsPage = (props) => {
    const pageContent = props.content 
    return (
        <Wrapper color = {props.color}>
            <Layout>
                <IllustrationSection collagePosition={pageContent.illustrationPosition}>
                    <Image src={require(`../../assets/img/statistics/${pageContent.illustration}.jpg`).default}></Image>
                </IllustrationSection>
                <Info>
                    <SectionTitle color={props.color}>{pageContent.title}</SectionTitle>
                    <SectionTexts>{pageContent.texts}</SectionTexts>
                </Info>
            </Layout>
            <GraphicsSection> </GraphicsSection>
        </Wrapper>
    );
};

export default StatisticsPage;