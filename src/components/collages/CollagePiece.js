import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'
import { Animation } from 'react-web-animation' ;


/*styles*/ 
const PieceContainer =  styled.div`
    position:absolute;
    width:${ props => props.width}%;
    left:${ props => props.collagePosition === "left" ?  (-100) : "" }px;
    right:${ props => props.collagePosition === "right" ?  (-100) : ""}px;
    top:${ props => props.top ? props.top : ""}%; 
    bottom:${ props => props.bottom ? props.bottom :""}%;
    filter: drop-shadow(0px 2px 2px #848484);
    z-index: ${ props => props.zindex ? props.zindex :""};
    opacity: ${ props => props.opacity ? props.opacity :""};
    mix-blend-mode: ${ props => props.blendmode ? props.blendmode :""};
    transformStyle: preserve-3d;
    perspective: 500px;


    img{
        width:100%;
        ${props => props.animate && props.collagePosition === "left" ? `transform:translateX(${props.left}px)` : "" };
        ${props => props.animate && props.collagePosition === "right" ? `transform:translateX(${props.right}px)` : "" };
        transition: transform ease-in-out 1s ;
    }

`
/*functions*/ 

const CollagePiece = (props) => {
    //enter animation functions
    const piece = props.pieceData
    const pieceTranslation = props.pieceTranslation
    const pieceRef = useRef(null)
    const [isOnScreen, setIsOnScreen] = useState(false)
    
    const HandlePiecePosition = () => {
        const piecePosition = pieceRef.current.getBoundingClientRect().top;
        const containerHeight = window.innerHeight
        const onScreenLimit = containerHeight/3

        if ( piecePosition < containerHeight - onScreenLimit ) {
            setIsOnScreen(true)
        } else {
            setIsOnScreen(false) 
        }
    }
    
    useLayoutEffect(()=>{
        HandlePiecePosition()
    })

    //Constant Animation Functions
    HandleScroll()

    const getKeyframes = () => {
        return [
            { transform: `translateY(${pieceTranslation[0]}px)`, offset: 0},
            { transform: `translateY(${pieceTranslation[1]}px)`, offset: 0.3 },
            { transform: `translateY(${pieceTranslation[2]}px)`, offset: 0.7875 },
            { transform: `translateY(${pieceTranslation[3]}px)`, offset: 1 }
        ];
    }

    const getTiming =( duration) => {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 10000,
            direction: 'alternate',
            fill: 'forwards'
        };
    }

    return (
        <div ref={pieceRef} >
            <Animation 
                keyframes={getKeyframes()}
                timing={getTiming(4500)}>
                    <PieceContainer
                        collagePosition={props.collagePosition}
                        width={piece.width}
                        left={piece.left}
                        right={piece.right}
                        top={piece.top}
                        bottom={piece.bottom}
                        zindex={piece.zindex}
                        opacity={piece.opacity}
                        blendmode={piece.blendmode}
                        perspective={piece.perspective}
                        animate={isOnScreen}> 
                        <img  alt=""  src={require(`../../assets/img/collages/${props.pieceFolder}/${piece.name}`).default}></img>
                    </PieceContainer>
            </Animation>
        </div>
    );
};

export default CollagePiece;