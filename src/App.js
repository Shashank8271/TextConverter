// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
     <Navbar pageName = "TEXT CHANGER" /> 
     <div className="container"><Textbox heading= "Enter text below" submit = "Convert to Uppercase" /></div>
     
    </>
  
  )
};

export default App;
