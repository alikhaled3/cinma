

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function People() {
  const [People, setTv] = useState([])
  const [isLoading, setisLoading] = useState(false)
let mediaType= "person"
let nums=new Array(10).fill(1).map((elem,count)=>count+1)
console.log(nums);
  async function getTrending(page){
    setisLoading(true)
    let {data}= await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=7b418cb7b7318c1309703aa026c3babb&language=en-US&page=${page}`)
    setisLoading(false)
    setTv(data.results)
  console.log(data.results);
  }
    
  
  useEffect(() => {
    getTrending(1)

  }, [])
 
 
 return  <>
  {isLoading?<><div className=" vh-100 d-flex align-content-center justify-content-center"> <div className=""><i className='fas fa-spin fa-spinner  fa-8x'></i></div></div></>:   
 
 <div className="row mt-5 pt-5 ">
 {People?.map((item ,index)=>   <>
 
    <div key={index} className="col-md-3  my-3 py-4 shadoww">
    <Link to={`/moviedetails/${item.id}/${mediaType}`} className='text-decoration-none text-white'>
    
       <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className='w-100 h-100' alt="" /> 

    <h3 className='h5 py-2'>{item.name} </h3>

    
    </Link>
</div> 
 </>)}
 <nav className='py-5'>
    <ul className='pagination pagination-sm d-flex justify-content-center'>
      {nums.map((page)=>      
      <li  onClick={()=>    getTrending(page)} className='page-item p-1'>
        <Link key={page} className='page-link bg-transparent text-white'>
          {page}
        </Link>
      </li>
      )} 

    </ul>
  </nav>
 </div>
 
 
 } 


 
 
  
  </>
}
