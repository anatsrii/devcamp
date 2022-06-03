import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import AboutMe from './Component/AboutMe';
import ContactMe from './Component/ContactMe';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/about-me' element={<AboutMe/>} />
      <Route path='/contact-me' element={<ContactMe/>} />
      <Route path='*' element={<WrongPath/>} />
    </Routes>
  );
}

function WrongPath () {
  return(
    <h1>Please check your url</h1>
  )
}

export default App;
