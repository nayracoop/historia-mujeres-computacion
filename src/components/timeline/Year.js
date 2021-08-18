import React from 'react';
import styled from 'styled-components'


const YearContainer =  styled.div`
    background-color:${ props => props.highlightColor || "black" };
    max-width:300px;
    margin: 0 auto;
    padding:0px 30px;
    border-radius: 30px;
    text-align: center;

    h3{
        color: white;
        font-family: ${ props => props.theme.fonts.display};
        font-size:5em;
        line-height:1.5em;
    }
`

const Year = (props) => {
    return (
        <YearContainer highlightColor={props.highlightColor}>
            <h3>{props.year}</h3>
        </YearContainer>
    );
};

export default Year;