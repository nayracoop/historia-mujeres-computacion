import React from 'react';
import styled from 'styled-components'
import TimelinePageText from './TimelinePageText'
import CollagesContainer from '../Collages/CollagesContainer'

const Wrapper = styled.div`
    width: 100%;
    height:100%;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
`; 

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const TextSection = styled.div`
    justify-content: right;
    padding-top: 25%;
    padding-right: 10%;
`;

const CollageSection = styled.div`
    position:relative;
    width:120%;
    left:-20%;
`;

const Year = styled.div`
    display: grid
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px
`;

const renderTextSection = (content, key) => {
    return(
        <TimelinePageText
            key={key}
            title={content.title}
            text={content.text}>
        </TimelinePageText>
    )
}

const TimelinePage = (props) => {

    return (
        <Wrapper>
            <Grid>
                <CollageSection>
                    <CollagesContainer collage={props.content.collage} />
                </CollageSection>
                <TextSection>
                    { props.content.texts.map( (content, key) => {
                        return(
                            renderTextSection(content, key)
                        )})
                    }
                </TextSection>
            </Grid>   
        </Wrapper>
    );
};

export default TimelinePage;