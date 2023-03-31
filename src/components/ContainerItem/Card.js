import { Link } from "react-router-dom"


const Card = (props) => {

  const {id, img} = props.imagen


  return (
    <div className="carousel">
      <div className="carousel-item">
        <Link to={`/imagenes/${id}`}><img src={img} alt="Img" /></Link>
      </div> 
    </div>
    )
  }
  export default Card
  