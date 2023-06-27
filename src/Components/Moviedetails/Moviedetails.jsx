import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Moviedetails() {
let {id,mediaType}=useParams()
const [isLoading, setisLoading] = useState(false)
const [Details, setDetails] = useState({})


async function getTrending(id,mediaType){
  setisLoading(true)
  let {data}= await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=7b418cb7b7318c1309703aa026c3babb`)
  setisLoading(false)
  setDetails(data)
console.log(data);
}
  

useEffect(() => {
  getTrending(id,mediaType)

}, [])



  return  <>
{isLoading?<><div className=" d-flex align-content-center justify-content-center"> <i className='fas fa-spin fa-spinner  fa-8x'></i></div></>: <div className="row mt-5 pt-5">
    <div className="col-md-3 ">
    {Details.poster_path? <img src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} className='w-100' alt="" />: 
        <img src={`https://image.tmdb.org/t/p/w500${Details.profile_path}`} className='w-100' alt="" />}
    </div>
    <div className="col-md-9 mt-5 ">
    <h2 className='h5'>{Details.title} {Details.name}</h2>
    <p className='text-muted'>{Details.overview} {Details.biography}</p>

    {Details.vote_average? <h4>vote average : {Details.vote_average.toFixed(1)} </h4>:''}
    {Details.vote_count?    <h4>vote count : {Details.vote_count}</h4>:''}
   

    </div>
  </div>
 }
 

  
  </>
}
