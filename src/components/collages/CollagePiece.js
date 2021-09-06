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

    img{
        width:100%;
        transform:${props => props.animate ? 'translateX(' + props.width + '%)' : ""};
        transition: transform ease-in-out 1s;
    }
`
/*functions*/ 


const CollagePiece = (props) => {
    //enter animation functions
    const piece = props.pieceData
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
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
        ];
    }

    const getTiming =( duration ) => {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 2,
            direction: 'alternate',
            fill: 'forwards'
        };
    }


    return (
        <div ref={pieceRef} >
            <Animation 
                keyframes={getKeyframes()}
                timing={getTiming(2500)}>
                    <PieceContainer
                        width={piece.width}
                        left={piece.left}
                        right={piece.right}
                        top={piece.top}
                        bottom={piece.bottom}
                        zindex={piece.zindex}
                        opacity={piece.opacity}
                        blendmode={piece.blendmode}
                        animate={isOnScreen}>
                            
                        <img  alt=""  src={require(`../../assets/img/collages/${props.pieceFolder}/${piece.name}`).default}></img>
                    </PieceContainer>
            </Animation>
        </div>
    );
};

export default CollagePiece;