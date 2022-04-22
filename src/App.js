import * as React from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import { useTheme} from '@mui/material/styles';
import { ErrorBoundry } from './components/ErrorBoundry';
import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Wardrobe from './pages/Wardrobe';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/Error';
import BasicContainer from "./components/BasicContainer/BasicContainer";





function App() {

  const theme = useTheme();
  console.log(theme);
  
  // const containerStyles ={
  //   overflow:' hidden' , 
  //   position:'relative', 
  //   m:'0px',
  //   p :'0px',
  //   bgcolor:'blue' , 
  //   //bgcolor:'#f2f3f4' ,
  //  // opacity:'0.9'
  // };
  
  return (
    <div style={{overflow:' hidden' , position:'relative' , backgroundColor:'transparent' }} >
      <ErrorBoundry>
       <BasicContainer maxWidth="false"  height= "100vh" width='100vw'  >
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kitchen" element={<Kitchen/>} />
          <Route path="wardrobe" element={<Wardrobe />} />
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


