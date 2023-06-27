
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tvshowe() {
  const [Tv, setTv] = useState([])
  const [isLoading, setisLoading] = useState(false)
let mediaType= "tv"
let nums=new Array(10).fill(1).map((elem,count)=>count+1)
console.log(nums);
  async function getTrending(page){
    setisLoading(true)
    let {data}= await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=7b418cb7b7318c1309703aa026c3babb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    setisLoading(false)
    setTv(data.results)
  console.log(data.results);
  }
    
  
  useEffect(() => {
    getTrending(1)

  }, [])
 
 
 return  <>
  {isLoading?<><div className=" d-flex align-content-center justify-content-center"> <i className='fas fa-spin fa-spinner  fa-8x'></i></div></>:   
 
 <div className="row mt-5 pt-5 ">
 {Tv?.map((item ,index)=>   <>
 
    <div key={index} className="col-md-3  mb-4 shadoww">
    <Link to={`/moviedetails/${item.id}/${mediaType}`} className='text-decoration-none text-white'>
    <div className="position-relative">
       <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} className='w-100 h-100' alt="" /> 

    <h3 className='h5 py-3'>{item.name} </h3>
   <div className='vote top-0 end-0 position-absolute'>{item.vote_average}</div>
    </div>
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
