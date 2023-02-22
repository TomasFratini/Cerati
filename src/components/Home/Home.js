import fondo from "../Img/cerati1.jpg"
import NavBar from "./NavBar"

const Home = () => {

    
  return (
    <>
    <div className="hero min-h-screen ">
        <img className="card-image" src={fondo} alt="Img"/>
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold"> </h1>
        <p className="mb-5"></p>
      </div>
      </div>
    </div>
    </>
    
  )
}
export default Home