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
    width:110%;
    left:-150px;
`;

const Title = styled.h1`
    font-family:${props => props.theme.fonts.display};
    line-height: 1em;
    font-size: 2.2em;
    color: #f7f3ad;

`
const Subtitle = styled.h2`
font-size: 3.3em;
line-height:1.2em;
margin-top: 20px;
display:block;
color:#68cdfe;

&::before, ::after{
    content:"{";
    font-size: 1.5em;
    display:inline-block;
    color: #a463d6;
    margin-right:10px;
}

&::after{
    content: "}";
    margin-left:10px;
}
`

const Cover = (props) => {
    const content = props.content
    return (
        <Wrapper>
            <Grid>
                <CollageSection >
                    <CollageContainer 
                        piecesFolder={content.piecesFolder}
                        collageContent={content.collagePieces}
                        collagePosition={props.content.collagePosition}>
                    </CollageContainer>
                </CollageSection>
                <TitleSection>
                    <Title>{content.title}</Title>
                    <Subtitle>{content.subtitle}</Subtitle>
                </TitleSection>
            </Grid>
        </Wrapper>
    );
};

export default Cover;




