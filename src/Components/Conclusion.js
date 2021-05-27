import React from 'react';

const Wrapper = styled.div`
    width: 100%;
    max-width:${ props => props.theme.layout.l}px;
    margin:0 auto;
    
    @media (max-width : ${props => props.theme.layout.l}px){
        overflow-x: hidden;
    }
`; 

const Conclusion = () => {
    return (
        <div>
            
        </div>
    );
};

export default Conclusion;