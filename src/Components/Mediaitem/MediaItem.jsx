import React from 'react'
import { Link } from 'react-router-dom';

export default function MediaItem({item}) {
  return <>
  
<div className="col-md-2 shadoww  mt-3 py-4">
    <Link to={`moviedetails/${item.id}/${item.media_type}`} className=' text-decoration-none text-white'>
    <div className="position-relative">
        {item.poster_path? <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className='w-100' alt="" />: 
        <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className='w-100' alt="" />}
   
    <h3 className='h5'>{item.title} {item.name}</h3>
    {item.vote_average? <div className='vote fwig top-0 end-0 position-absolute'>{item.vote_average?.toFixed(1)}</div>:''}
   
    </div>

    </Link>
</div>  
  
</>
    
  
}
