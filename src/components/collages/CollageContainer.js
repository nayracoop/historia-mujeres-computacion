import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'

const Wrapper = styled.div`
    position: relative;
    width:100%;
    min-height:100vh;
    padding-top:10%;
`

const setPieceAnimation = () => {
    let translations = []

    for( let i =0; i < 4; i++){
        translations.push(Math.round(Math.random()*10))
    }

    return translations
}

const CollageContainer = (props) => {
    const CollageContent = props.collageContent
    
    return (
        <Wrapper> 
            {CollageContent.map( (piece, key) =>{                       
                return(
                    <CollagePiece
                        pieceTranslation={setPieceAnimation()}
                        key={key}
                        pieceData={piece}
                        pieceFolder={props.piecesFolder}>
                    </CollagePiece>
                )
            } )}                
        </Wrapper>
    );
};

export default CollageContainer;