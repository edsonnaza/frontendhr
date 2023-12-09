import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import './App.scss'
import Nav from './components/layout/Nav/Nav';
import Bienvenido from './components/layout/Bienvenido/Bienvenido';
import Page404 from './components/layout/404/page404';
import Login from "./components/layout/Auth/Login";
import { getFirstUser } from './utils/selectors';
import { useNavigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

 
//const URL = 'http://localhost:3500/hr/';
 


function App() {

  //const [logged, setLogged] = useState(false)
  const [loginMessage, setLoginMessage] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  let logged=false;
 
    let user = useSelector(getFirstUser);
     

  if(!user) {
    user = useSelector(state => state.user ? state.user : {}); 
  
  } 
  logged = user.loggedIn;
  console.log('logged:',logged);
  //if(user.loggedIn) setLogged(true);
  const onLogin =  async (userInput)=>{
    try {

    setLoginMessage("");
    if(!userInput.email || !userInput.password) {
      setLoginMessage('Favor escribir un usuario y/o contraseña!');
      return
   
    }

   await axios(`/login?email=${userInput.email}&password=${userInput.password}`).then(
       ({data})=>{
          const {access} = data;
          const userLogged={
            email:userInput.email,
            loggedIn:true,
          }
      
          if(access){
            dispatch({
              type: 'LOGIN',
              payload: userLogged
            })
             console.log('loged successfully!');
             //setLogged(true);
             logged=true;
             console.log(logged);
             navigate('/');
          } else {
            
             setLoginMessage(data);
          }
       }
    
    )} catch (error){
       
        setLoginMessage(error.message);

      
    }
     

    }

 const cleanLoginMessage= ()=>{
    setLoginMessage('');
 }
 
 const logOut = ()=>{
    //setLogged(false);
    dispatch({
      type: 'LOGOUT',
       
    })

    navigate('/login');
 }
 
//  useEffect(()=>{
//   if(logged) {
//     navigate('/') 
//   } else {
//     navigate('/login')
//   }
//   },[logged]);

  const shouldNavigate = useDetermineNavigation(logged);

  useEffect(() => {
    if (shouldNavigate) {
      navigate(shouldNavigate); 
    }
  }, [shouldNavigate]) 

  

function useDetermineNavigation(logged) {
   if (logged) return '/';
   else return '/login';
}

  return (
    <>
     <Nav 
   
     logOut={logOut}
     />
       
       
      

      <Routes>
              {/* <Route path='/' element={<Bienvenido/>}  /> */}
              <Route path='/login' element = {<Login onLogin={onLogin} loginMessage={loginMessage} cleanLoginMessage={cleanLoginMessage}/>} />
            <Route path='*' element={<Page404 />} />
         </Routes>
    </>
  )
}

export default App
