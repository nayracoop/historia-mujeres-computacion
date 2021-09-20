import React from 'react';
import styled from 'styled-components'
import Markdown from 'react-markdown'
import CollageContainer from './collages/CollageContainer';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
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

const TitleSection = styled.div`
    justify-content: right;
    align-self:center;
    z-index: 999;
`;

const CollageSection = styled.div`
    position:relative;
`;

const Title = styled(Markdown)`
    font-family:${props => props.theme.fonts.display};
    line-height: 3em;
    font-size: 1.7em;
    display: inline;

    strong{
        padding: 0.2em;
        box-shadow: 0.2em 0 0 rgba(#fff,0.7), -0.2em 0 0 rgba(#fff,0.7);
        background-color: #fff;
        background-color: rgba(#fff,0.7);
    }
`

const Cover = (props) => {
    const content = props.content
    return (
        <Wrapper>
            <Grid>
                <CollageSection >
                    <CollageContainer piecesFolder={content.piecesFolder}collageContent={content.collagePieces}></CollageContainer>
                </CollageSection>
                <TitleSection>
                    <Title>{content.title}</Title>
                </TitleSection>
            </Grid>
        </Wrapper>
    );
};

export default Cover;




