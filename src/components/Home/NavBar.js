import Audio from "../audio/Audio"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 nav flex flex-col w-full border-opacity-50">
  <div className="navbar-center grid h-20 card place-items-center">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={'/categoria/guitarras'} className="titulos">Guitarras</Link></li>
        <li><Link to={'/categoria/vivo'} className="titulos" >En vivo</Link></li>
        <li><Link to={'/categoria/estudio'} className="titulos" >Estudio</Link></li>
      </ul>
    </div>
    <a href="/" className="logo">Gustavo Cerati</a>
  </div>
  <div className="navbar-center hidden lg:flex grid h-20 card place-items-center">
    <ul className="menu menu-horizontal px-1">
        <li><Link to={'/categoria/guitarras'} className="titulos" >Guitarras</Link></li>
        <li><Link to={'/categoria/vivo'} className="titulos" >En vivo</Link></li>
        <li><Link to={'/categoria/estudio'} className="titulos" >Estudio</Link></li>
    </ul>
  </div>
</div>
  )
}
export default NavBar