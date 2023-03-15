import React from 'react';
import './style.scss';
import Navbar from "./components/Navbar/Navbar";
import Body from './components/Body/Body';
import Shortener from './components/Shortener/Shortener';
import Statistics from './components/Statistics/Statistics';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='body'>
      <Navbar />
      <Body />
      <Shortener />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  )
}

export default App