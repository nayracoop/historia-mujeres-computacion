import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width:90%;
`

const TemporaryCollage = styled.img`
    width: 100%;
`; 


const Collage = (props) => {
    return (
        <Wrapper>
            <TemporaryCollage src={require(`../../assets/img/collages/complete/${props.collage}.png`).default}/>
        </Wrapper>
    );
};

export default Collage;