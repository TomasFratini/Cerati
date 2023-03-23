const ItemDetail = ({detalle}) => {



  return (
    <div className="w-64 carousel rounded-box">
        <div className="carousel-item w-full">
            <img src={detalle.img} className="w-full" alt="Tailwind CSS Carousel component" />
        </div> 
    </div>
  )
}
export default ItemDetail