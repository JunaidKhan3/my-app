import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode is enabled", "success")
      console.log("light mode working ");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert(null)
      console.log("dark mode working ");
    }
  }
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>

      {/* <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3' >
        <TextForms showAlert={showAlert} mode={mode} heading='Enter the Text' />
        <About />
      </div> */}



      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3' >
        <Routes>
          <Route exact path="/" />
          <Route exact path="/home" element={<TextForms showAlert={showAlert} mode={mode} heading='Enter the Text' />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


