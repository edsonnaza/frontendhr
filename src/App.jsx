import { useState } from 'react'
 
import './App.scss'
import Nav from './components/layout/Nav/Nav';
import Bienvenido from './components/layout/Bienvenido/Bienvenido';
import Page404 from './components/layout/404/page404';
import Login from "./components/layout/Auth/Login";
import { useNavigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const URL = 'http://localhost:3500/hr/';
function App() {
  const [logged, setLogged] = useState(false)
  const [loginMessage, setLoginMessage] = useState(true);
  const navigate = useNavigate();


  const onLogin =  async (userInput)=>{
    try {
    setLoginMessage("");
   await axios(`${URL}login?email=${userInput.email}&password=${userInput.password}`).then(
       ({data})=>{
          const {access} = data;
          if(access){
             console.log('loged successfully!');
             setLogged(true);
             navigate('/');
          } else {
             setLoginMessage('User or password invalid, please try again!');
          }
       }
    
    )} catch (error){
       throw Error ({error:error.message});
    }
     

    }

 const cleanLoginMessage= ()=>{
    setLoginMessage('');
 }
 
 const logOut = ()=>{
    setLogged(false);
 }
 
 useEffect(()=>{
     !logged && navigate('/login');
  },[logged]);

  return (
    <>
     <Nav 
     logged={logged}
     logOut={logOut}
     />
       
     {logged && <Bienvenido/>} 
      

      <Routes>
            <Route path='/login' element = {<Login onLogin={onLogin} loginMessage={loginMessage} cleanLoginMessage={cleanLoginMessage}/>} />
            <Route path='*' element={<Page404 />} />
         </Routes>
    </>
  )
}

export default App
