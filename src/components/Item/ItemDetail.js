const ItemDetail = ({detalle}) => {



  return (
    <div className="flex flex-col mb-10 justify-center">
      <div className="carousel rounded-box">
          <div className="carousel-item w-full ">
              <img src={detalle.img} className="w-full" alt="Tailwind CSS Carousel component" />
          </div> 
      </div>
      <div className="text-center">
       <h2 className="modelo-guitarra">{detalle.modelo}</h2>
      </div>
    </div>
  )
}
export default ItemDetail