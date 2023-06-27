
import './App.css';
import Layout from './Components/Layout/Layout';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Components/home/home';
import Regester from './Components/Regester/Regester';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import Moviedetails from './Components/Moviedetails/Moviedetails';
import Movies from './Components/Movies/Movies';
import Tvshowe from './Components/Tvshowe/Tvshowe';
import People from './Components/People/People';



function App() {

  
const [userData, setuserData] = useState({})

function saveUserData(){

  let encodedToken = localStorage.getItem('userToken')
  let decodedToken = jwtDecode(encodedToken)
  setuserData(decodedToken)
  console.log(userData);

}


let routers =createBrowserRouter([
  {path:'' ,element:<Layout setuserData={setuserData} userData={userData}/> ,children:[
    {index:true , element:<Home/>},
    
    {path:'movies' , element:<Movies/>},
    {path:'tvshowe' , element:<Tvshowe/>},
    {path:'people' , element:<People/>},

    {path:'moviedetails/:id/:mediaType' , element:<Moviedetails />},
    {path:'regester' , element:<Regester/>},

    {path:'login' , element:<Login saveUserData={saveUserData}/>},

  ]}
])

  return <>
<RouterProvider router={routers}></RouterProvider>
  </>

  
}

export default App;
