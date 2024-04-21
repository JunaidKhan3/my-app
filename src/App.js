import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';



function App() {
  return (
    <>
      <Navbar />
      <div className='container my-3'>
        <TextForms heading='Enter the Text' />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;


