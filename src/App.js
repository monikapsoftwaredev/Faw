import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/nav/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Wordrobe from './pages/Wordrobe';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/.Error';
import Container from "@mui/material/Container";
import Bathroom from './pages/Bathroom';





function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div >
      <Container maxWidth='false' sx={{bgcolor: "#FFFFFF", height: "100vh"}} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="wordrobe" element={<Wordrobe />} />
          <Route path="bathroom" element={<Bathroom />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
      </div>
     
      
     
    </div>
  );
}

export default App;