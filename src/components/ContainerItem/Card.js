import { Link } from "react-router-dom"


const Card = (props) => {

  const {id, description, img, modelo} = props.imagen


  return (
    <div className="carousel rounded-box">
  <div className="ccarousel-item">
    <Link to={`/imagenes/${id}`}><img src={img} alt="Img" /></Link>
  </div> 
</div>
    )
  }
  export default Card
  