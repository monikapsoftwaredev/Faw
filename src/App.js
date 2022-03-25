import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useTheme} from '@mui/material/styles';
import { ErrorBoundry } from './components/ErrorBoundry';
import Navbar from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Wardrobe from './pages/Wardrobe';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/Error';
import BasicContainer from "./components/BasicContainer/BasicContainer";
import Bathroom from './pages/Bathroom';







function App() {

  const theme = useTheme();
  console.log(theme);
  
  const containerStyles ={
    overflow:' hidden' , 
    position:'relative'
  };
  
  return (
    <div style={{overflow:' hidden' , position:'relative'}} >
      <ErrorBoundry>
       <Navbar/>
       <BasicContainer maxWidth='false'  height= "100vh" width='80vh'  sx={containerStyles} >
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
      <Footer/>
      </ErrorBoundry>
    </div>
  );
}

export default App;


