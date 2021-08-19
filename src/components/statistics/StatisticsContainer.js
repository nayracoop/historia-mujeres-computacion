import React from 'react';
import styled from 'styled-components'

import StatisticsCover from './StatisticsCover'
import StatisticsPage from './StatisticsPage'

const Wrapper =styled.div`
    width:100%;
    background-color: #e4e2e1;
    min-height:100%;
`

const StatisticsContainer = (props) => {
    const coverContent= props.content.cover
    const pagesContent = props.content.parts
    return (
        <Wrapper>
            <StatisticsCover color = {props.content.color} coverContent={coverContent}></StatisticsCover>
            {
                pagesContent.map((pageContent, key) => {
                    return(
                        <StatisticsPage color = {props.content.color} key={key} content={pageContent}></StatisticsPage>
                    )
                })
            }
        </Wrapper>
    );
};

export default StatisticsContainer;