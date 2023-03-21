import { Link } from "react-router-dom"


const Card = (props) => {

  const {id, description, img, modelo} = props.imagen


  return (
    <div className="carousel rounded-box">
  <div className="ccarousel-item">
    <a href="/"><img src={img} alt="Img" /></a>
  </div> 
</div>
    )
  }
  export default Card
  