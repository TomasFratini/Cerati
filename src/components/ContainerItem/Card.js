import { Link } from "react-router-dom"


const Card = (props) => {

  const {id, description, img, modelo} = props.imagen


  return (
    <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <a href="/"><img src={img} alt="Drink" /></a>
  </div> 
</div>
    )
  }
  export default Card
  