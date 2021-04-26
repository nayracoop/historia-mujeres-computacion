import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components'

import Cover from '../Components/Cover'
import TimelineContainer from '../Components/Timeline/TimelineContainer'

import content from '../assets/data/content.json'

const Theme = {
    fonts : {
        display:"Source Code Pro",
        text:"Open Sans"
    },
    colors:{
        text:"",
    },
    layout:{
        xs:"",
        s:"",
        m:"",
        l:"",
        xl:""
    }

}

const Background = styled.div`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
`


const App = () => {

  const [coverContent, setCoverContent] = useState(content.cover)
  const [timelineParts, setTimelineParts] = useState(content.timeline)


  return (
    <div className="App">
      <ThemeProvider  theme={Theme}>
        <Background></Background>
        <Cover content = {coverContent} ></Cover>
        <TimelineContainer content = {timelineParts}></TimelineContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;

