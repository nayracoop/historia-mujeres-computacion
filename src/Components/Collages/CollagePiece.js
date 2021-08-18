import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

/*styles*/ 
const PieceContainer =  styled.div`
    position:absolute;
    width:${ props => props.width};
    left:${ props => props.left ? props.left : "" };
    right:${ props => props.right ? props.right : ""};
    top:${ props => props.top ? props.top : ""};
    bottom:${ props => props.bottom ? props.bottom :""};

    img{
        width:100%;
    }
`

/*functions*/ 


const CollagePiece = (props) => {
    return (
        <PieceContainer 
            width={props.width}
            left={props.left}
            right={props.right}
            top={props.top}
            bottom={props.bottom}>
            <img src={props.pieceSrc}></img>
        </PieceContainer>
    );
};


export default CollagePiece;