import React from 'react';
import styled from 'styled-components'
import TimelinePageText from './TimelinePageText'
import Year from '../Timeline/Year'
import CollageContainer from '../Collages/CollageContainer';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    
    @media (max-width : ${props => props.theme.layout.l}px){
        overflow-x: hidden;
    }
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
    
`;

const CollageSection = styled.div`
    position:relative;
    align-self:center;

    left:${props => props.collagePosition === "left" ? "-20%":"" };
    right:${props => props.collagePosition === "right" ? "-20%":"" };
    order:${props => props.collagePosition === "right" ? 2 : "" };
`;

const TimelineConector = styled.div `

`

const TimelinePage = (props) => {
    return (
        <Wrapper>
            <Year highlightColor={props.content.highlightColor} year={props.content.decade}></Year>
            <TimelineConector></TimelineConector>
            <Grid>
                <CollageSection collagePosition={props.content.collagePosition}>
                        <CollageContainer piecesFolder={props.content.piecesFolder} collageContent={props.content.collagePieces}></CollageContainer>
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