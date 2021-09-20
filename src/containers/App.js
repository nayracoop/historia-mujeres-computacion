import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components'

import TimelineContainer from '../components/timeline/TimelineContainer'
import StatisticsContainer from '../components/statistics/StatisticsContainer'
import Conclusion from '../components/Conclusion';

import content from '../assets/data/content.json'


const Theme = {
    fonts : {
        display:"Source Code Pro",
        text:"Open Sans"
    },
    colors:{
        text:"#f1f1f1",
    },
    layout:{
        xs:"",
        s:"",
        m:"768",
        l:"1280",
        xl:""
    }
}

const Background = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: #333333;
  background-size:cover;
  z-index:-2;
 
`


const App = () => {

  const [coverContent] = useState(content.cover)
  const [timelineParts] = useState(content.timeline)
  const [statisticsParts] = useState(content.statistics)
  const [conclusion] = useState(content.reflexion)

  return (
    <div className="App">
      <ThemeProvider  theme={Theme}>
        <Background></Background>
        <TimelineContainer coverContent = {coverContent} content = {timelineParts}></TimelineContainer>
        <StatisticsContainer content = {statisticsParts}></StatisticsContainer>
        <Conclusion content={conclusion}></Conclusion>
      </ThemeProvider>
    </div>
  );
};

export default App;

