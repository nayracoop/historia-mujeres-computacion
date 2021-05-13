import React from 'react';
import styled from 'styled-components'
import TimelinePageText from './TimelinePageText'
import CollagesContainer from '../Collages/CollagesContainer'
import Year from '../Timeline/Year'

const Wrapper = styled.div`
    width: 100%;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
`; 

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width : ${props => props.theme.layout.m}px){
        width:90%;
        margin:0 auto;
        grid-template-columns: 1fr;
    }
`;

const TextSection = styled.div`
    justify-content: right;
`;

const CollageSection = styled.div`
    position:relative;
    align-self:center;
    width:120%;

    left:${props => props.collagePosition === "left" ? "-20%":"" };
    right:${props => props.collagePosition === "right" ? "-20%":"" };
    order:${props => props.collagePosition === "right" ? 2 : "" };
`;

const TimelineConector = styled.div `
    position: absolute;
    width: 1px;
    left:50%;
    margin-top:-5%;
    height: 90%;
    z-index: -1;
    border-left: dashed 2px #000;
`


const TimelinePage = (props) => {
    return (
        <Wrapper>
            <Year highlightColor={props.content.highlightColor} year={props.content.decade}></Year>
            <TimelineConector></TimelineConector>

            <Grid>
                <CollageSection collagePosition={props.content.collagePosition}>
                    <CollagesContainer collage={props.content.collage} />
                </CollageSection>

                <TextSection>
                    { props.content.texts.map( (content, key) => {
                        return(
                            <TimelinePageText
                                key={key}
                                collagePosition={props.content.collagePosition}
                                highlightColor={props.content.highlightColor}
                                title={content.title}
                                text={content.text}>
                            </TimelinePageText>
                        )})
                    }
                </TextSection>
            </Grid>   
        </Wrapper>
    );
};

export default TimelinePage;