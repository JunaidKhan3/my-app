import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
     document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container my-3' >
        <TextForms mode={mode}  heading='Enter the Text' />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;


