import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width:100%;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    color: ${props => props.color}
    
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
const InfoSection = styled.div`
    justify-content: right;
`;

const IllustrationSection = styled.div`
    position:relative;
    align-self:center;

    left:${props => props.collagePosition === "left" ? "-20%":"" };
    right:${props => props.collagePosition === "right" ? "-20%":"" };
    order:${props => props.collagePosition === "right" ? 2 : "" };
`;

const Image = styled.img`
    width: 100%;
    margin: 0 auto;
`

const GraphicsSection = styled.div`
    
`


const StatisticsPage = (props) => {
    const pageContent = props.content 
    console.log(props.color)
    return (
        <Wrapper color = {props.color}>
            <Layout>
                    <IllustrationSection>
                        <Image src={require(`../../assets/img/statistics/${pageContent.illustration}.jpg`).default}></Image>
                    </IllustrationSection>
                    <InfoSection>

                    </InfoSection>
            </Layout>
            <GraphicsSection>

            </GraphicsSection>
        </Wrapper>
    );
};

export default StatisticsPage;