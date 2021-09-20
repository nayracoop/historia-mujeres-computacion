import React from 'react';
import styled from 'styled-components'


const YearContainer =  styled.div`
    max-width:300px;
    margin: 0 auto;
    padding:0px 30px;
    border-radius: 30px;
    text-align: center;

    
    &&::before , ::after{
        content: " ( ";
        display: inline-block;
        font-size: 6em;
        color: #a463d6;
        margin-right:5%;
    }

    &&::after {
        content: " ) ";
        margin-left:5%;
        margin-right:0;
    }

    h3{
        display: inline-block;
        color: #68cdfe;
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