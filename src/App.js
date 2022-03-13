import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/nav/Nav';
import Fotter from './components/footer/Footer';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Wardrobe from './pages/Wardrobe';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/.Error';
import BasicContainer from "./components/basicContainer/BasicContainer";
import Bathroom from './pages/Bathroom';






function App() {
  return (
    <>
      
        <Navbar/>
      
      
      <BasicContainer maxWidth='false'  backgroundColour='red'  height= "100vh" width='80vh'  sx={{overflow:' hidden'}} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kitchen" element={<Kitchen/>} />
          <Route path="wardrobe" element={<Wardrobe />} />
          <Route path="bathroom" element={<Bathroom />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
      </BasicContainer>
      <Fotter/>
     
      
     
    </>
  );
}

export default App;


