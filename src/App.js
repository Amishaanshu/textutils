import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setContentText('Enable Light Mode');
      showAlert("Dark Mode has been Enabled","success");
      document.body.style.backgroundColor='#010b2f';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      setContentText('Enable Dark Mode');
    }
  }
  const [content,setContentText]=useState('Enable Dark Mode');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1000 );
  }

  return (
  
    <BrowserRouter>
    <Navbar title="WordPlay" aboutText='About Us' mode={mode} toggleMode={toggleMode} content={content}/>
    <Alert alert={alert}/>
       <Routes>
       <Route path='/' element={<TextForm heading="WordPLAY" mode={mode} showAlert={showAlert}/>}></Route>
        <Route path='/About' element={<About />}></Route>
       </Routes>
       </BrowserRouter>
    
  );
}

export default App;
