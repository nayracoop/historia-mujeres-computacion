import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components'
import HandleScroll from '../../animations/HandleScroll'
import { Animation } from 'react-web-animation' ;


/*styles*/ 
const PieceContainer =  styled.div`
    position:absolute;
    width:${ props => props.width}%;
    left:${ props => props.left !== 0 ? - props.width : "" }%;
    right:${ props => props.right !== 0 ?  - props.width: ""}%;
    top:${ props => props.top ? props.top : ""}px;
    bottom:${ props => props.bottom ? props.bottom :""}px;
    filter: drop-shadow(0px 2px 3px #848484);

    z-index: ${ props => props.zindex ? props.zindex :""};
    opacity: ${ props => props.opacity ? props.opacity :""};
    mix-blend-mode: ${ props => props.blendmode ? props.blendmode :""};

    transformStyle: preserve-3d;
    perspective: 500px;

    img{
        width:100%;
        transform:${props => props.animate ? 'translateX(' + props.width + '%)' : ""} translateZ(${props => props.perspective ? props.perspective : ""}px);
        transition: transform ease-in-out 1s;
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

        if(piecePosition < containerHeight - onScreenLimit){
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
            { transform: `translateY(${pieceTranslation[0]}px) rotateY(${pieceTranslation[0]}deg)`,offset: 0 },
            { transform: `translateY(${pieceTranslation[1]}px) rotateY(${pieceTranslation[1]}deg)`, offset: 0.3 },
            { transform: `translateY(${pieceTranslation[2]}px) rotateY(${pieceTranslation[2]}deg)`, offset: 0.7875 },
            { transform: `translateY(${pieceTranslation[3]}px) rotateY(${pieceTranslation[3]}deg)`, offset: 1 }
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