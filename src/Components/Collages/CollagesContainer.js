import React from 'react';
import styled from 'styled-components'
import temporaryCollage from '../../assets/img/collage.png';


const TemporaryCollage = styled.img`
    width: 100%;
`; 


const Collage = () => {
    return (
        <div>
            <TemporaryCollage src={temporaryCollage} />
        </div>
    );
};

export default Collage;