import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'


/*styles*/ 
const PieceContainer =  styled.div`
    position:absolute;
    width:${ props => props.width}%;
    left:${ props => props.left !== 0 ? - props.width : "" }%;
    right:${ props => props.right !== 0 ?  - props.width: ""}%;
    top:${ props => props.top ? props.top : ""}px;
    bottom:${ props => props.bottom ? props.bottom :""}px;
    transform:${props => props.animate ? 'translateX(' + props.width + '%)' : ""};
    transition: transform ease-in-out 1s;
    img{
        width:100%;
    }
`
/*functions*/ 


const CollagePiece = (props) => {
    HandleScroll()

    const piece= props.pieceData
    const pieceRef = useRef(null)

    const [isOnScreen, setIsOnScreen] = useState(false)
    
    const HandlePiecePosition = () => {
        const piecePosition = pieceRef.current.getBoundingClientRect().top;
        const containerHeight = window.innerHeight
        const onScreenLimit = containerHeight/2

        if(piecePosition < containerHeight - onScreenLimit){
            setIsOnScreen(true)
        } else {
            setIsOnScreen(false) 
        }
    }
    
    useLayoutEffect(()=>{
        HandlePiecePosition()
    })

    return (
        <PieceContainer
            ref={pieceRef}
            width={piece.width}
            left={piece.left}
            right={piece.right}
            top={piece.top}
            bottom={piece.bottom}
            animate={isOnScreen}>
                
            <img 
                src={require(`../../assets/img/collages/${props.pieceFolder}/${piece.name}`).default}
            ></img>
        </PieceContainer>
    );
};

export default CollagePiece;