import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components'

import Cover from '../Components/Cover'
import TimelineContainer from '../Components/Timeline/TimelineContainer'

import content from '../assets/data/content.json'
import background from '../assets/img/background.jpg';


const Theme = {
    fonts : {
        display:"Source Code Pro",
        text:"Open Sans"
    },
    colors:{
        text:"#111111",
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
  background-image:url(${background});
  background-size:cover;
  z-index:-2;
 
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

