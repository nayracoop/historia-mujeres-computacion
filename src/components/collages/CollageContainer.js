import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'

const Wrapper = styled.div`
    width:100%;
    height:100%;
`

const CollageContainer = (props) => {
    const CollageContent = props.collageContent
    
    return (
        <Wrapper> 
            {CollageContent.map( (piece, key) =>{                       
                return(
                    <CollagePiece
                        key={key}
                        pieceData={piece}
                        pieceFolder={props.piecesFolder}
                ></CollagePiece>
                )
            } )}                
        </Wrapper>
    );
};

export default CollageContainer;