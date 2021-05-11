import React from 'react';
import styled from 'styled-components'
import TimelinePageText from './TimelinePageText'
import CollagesContainer from '../Collages/CollagesContainer'
import background from '../../assets/img/background.png';

const Wrapper = styled.div`
    width: 100%;
    height:100%;
    background-image: url(${background});
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
    display: grid;
    justify-content: left;
    align-content: flex-end;
    padding-bottom: 0px;

`;

const Year = styled.div`
    display: grid
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px
`;

const renderTextSection = (content) => {
    return(
        <TimelinePageText
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
                    <CollagesContainer />
                </CollageSection>
                <TextSection>
                    { props.content.texts.map( (content, key) => {
                        return(
                            renderTextSection(content)
                        )})
                    }
                </TextSection>
            </Grid>   
        </Wrapper>
    );
};

export default TimelinePage;