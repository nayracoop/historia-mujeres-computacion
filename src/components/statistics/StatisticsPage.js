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
    min-height:90vh;

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
    font-size: 3em;
    color:#f7f3ad;
    margin-bottom:70px;

    &::after{
        content: "()";
        margin-left: 10px;
    }
    
`

const SectionTexts= styled(Markdown)`
    color: #ea7550;
    font-size: 1.3em;
    line-height:1.8em;
    margin-left:70px;
    width:90%;

    &::before, ::after{
        content:"{";
        display:block;
        color: #a463d6;
        margin-left:-70px;
        margin-bottom:-70px;
        font-size: 4em;
    }

    &::after{
        content:"}";
        display:block;
        color: #a463d6;
        margin-left:100%;
        font-size: 4em;
        margin-top:-70px;
        margin-bottom:70px;
    }

`

const GraphicsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const GraphicWrapper = styled.div`
    margin:30px;
    margin-top:70px;

    h3{
        display:block;
        height:120px;
        color:#f7f3ad;
        font-weight:600;
        font-size:1.5em;
    }

    img{
        width:100%;
    }

    img.feedback{
        max-height:160px;
        width:auto;
        opacity:.6;
    }
`
const Notes = styled(Markdown)`
    p{
        color:#0db474;
        font-size: 1.2em;
        
        strong{
            display:block;
            font-size:5em;
        }
    }
`
const Extra = styled.div`
    color: #FFFFFF;
    opacity:.6;
    line-height:1.5em;
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
            <GraphicsSection>  
                
                {pageContent.graphics ? pageContent.graphics.map((graphic, key) => {
                    return(
                        pageContent.illustration === "desigualdad" ?
                        <GraphicWrapper>
                            <img key={key} src={require(`../../assets/img/statistics/${graphic.graphic}`).default}></img>
                            <Notes>{graphic.description}</Notes>
                        </GraphicWrapper>
                        :
                        <GraphicWrapper>     
                            <h3>{graphic.title}</h3>
                            <img className="feedback" key={key} src={require(`../../assets/img/statistics/${graphic.graphic}`).default}></img>
                            <Notes>{graphic.description}</Notes>
                            <Extra>{graphic.notes.map((note, key) => {
                                return <p key={key}>{note}</p>
                            })}</Extra>
                    </GraphicWrapper>
                    )
                }) : ""}
            </GraphicsSection>
        </Wrapper>
    );
};

export default StatisticsPage;