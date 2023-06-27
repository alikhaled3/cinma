import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MediaItem from './../Mediaitem/MediaItem';

export default function Home() {
const [movies, setmovies] = useState([])
const [Tv, setTv] = useState([])
const [people, setpeople] = useState([])
const [isLoading, setisLoading] = useState(false)


async function getTrending(mediaItem,callback){
  setisLoading(true)
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=7b418cb7b7318c1309703aa026c3babb`)
  setisLoading(false)
  callback(data.results)
console.log(data.results);
}
  

useEffect(() => {
  getTrending('movie',setmovies)
  getTrending('tv',setTv)
  getTrending('person',setpeople)
}, [])

return  <>
{isLoading?<><div className=" d-flex align-content-center justify-content-center"> <i className='fas fa-spin fa-spinner  fa-8x'></i></div></>:<>      <div className="row py-5">
        <div className="col-md-4 mt-5">        
          <div className=" brdr w-25 mb-3"></div>
              <h2 className='h3 txt sizee' > Trending <br />Movies <br />To Watch Now</h2>
              <p className='text-muted'>Most Watched movies By Week</p>
          <div className=" brdr w-100 mt-3"></div>
        </div>

      {movies?.slice(0,10).map((item ,index)=><MediaItem key={index} item={item}/>)}
      </div>

      {/*  */}
      <div className="row ">
        <div className="col-md-4 mt-5 pt-5">        
          <div className=" brdr w-25 mb-3"></div>
              <h2 className='h3 txt sizee'> Trending <br />Tv <br />To Watch Now</h2>
              <p className='text-muted'>Most  Watched Tv By Week</p>
          <div className=" brdr w-100 mt-3"></div>
        </div>

      {Tv?.slice(0,10).map((item ,index)=><MediaItem key={index} item={item}/>)}
      </div>
      {/*  */}
      <div className="row  ">
        <div className="col-md-4 mt-5 pt-5">        
          <div className=" brdr w-25 mb-3"></div>
              <h2 className='h3 txt sizee'> Trending <br />People <br />To Watch Now</h2>
              <p className='text-muted'>Most Watched people By Week</p>
          <div className=" brdr w-100 mt-3"></div>
        </div>

      {people?.slice(0,10).map((item ,index)=><MediaItem key={index} item={item}/>)}
      </div>
</>}


  </>
}
