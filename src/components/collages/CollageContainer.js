import React from 'react';
import styled from 'styled-components'
import CollagePiece from './CollagePiece'

const Wrapper = styled.div`
    width:100%;
    height:100%;
`

const CollageContainer = (props) => {
    const CollageContent = props.collageContent
    const PiecesFolder=props.piecesFolder
    return (
        <Wrapper> 
            {CollageContent.map( (piece, key) =>{                       
                return(
                    <CollagePiece
                        key={key}
                        className={piece.name}
                        pieceSrc={require(`../../assets/img/collages/${PiecesFolder}/${piece.name}`).default}
                        width = {piece.width}
                        left={piece.left}
                        right={piece.right}
                        top={piece.top}
                        bottom={piece.bottom}
                ></CollagePiece>
                )
            } )}                
        </Wrapper>
    );
};

export default CollageContainer;