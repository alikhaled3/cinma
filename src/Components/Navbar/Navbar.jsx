import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userData ,logOut}) {
  return  <>

 <nav className="navbar fixed-top navbar-expand-sm text-white bg112">
    <div className="container " >
    <Link className="navbar-brand cursor-pointer txt fs-4 bordrr " to="/"><i class="fa-solid fa-film  me-3"></i>CinemaScope</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav m-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link px-4  fs-5 txt" to="movies" aria-current="page">Movies <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item txt">
          <Link className="nav-link px-4  fs-5 txt" to="tvshowe" aria-current="page">Tv show <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-4 fs-5 txt" to="people" aria-current="page">People <span className="visually-hidden">(current)</span></Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        {userData?     <li className="nav-item">
          <span className="nav-link   fs-5 txt"  onClick={logOut} >sigout<i class="ms-2 fa-solid fa-right-from-bracket"></i> <span className="visually-hidden">(current)</span></span>
        </li>:<><li className="nav-item">
                <Link className="nav-link  fs-5  txt" to="regester" aria-current="page">Regester<i class="ms-2 fa-solid fa-user-plus"></i> <span className="visually-hidden">(current)</span></Link>
              </li><li className="nav-item ">
                  <Link className="nav-link  fs-5 txt"  to="login" aria-current="page">login <i class="ms-3 fa-solid fa-right-to-bracket"></i><span className="visually-hidden">(current)</span></Link>
                </li></>}
   


      </ul>

    </div>
   </div>
 </nav>
 

  
  </>
}
