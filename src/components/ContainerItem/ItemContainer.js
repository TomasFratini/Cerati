import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemContainer = () => {

  const {categoriaId} = useParams()

  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    const db = getFirestore()
    
    const imagenes = collection(db, 'fotos')
    
    getDocs(imagenes).then((snapshot) => {
      const imagenList = []
      snapshot.docs.forEach(s =>{
        imagenList.push ({id: s.id, ...s.data()})
      });

      const imagenFilter = categoriaId ? (imagenList.filter (c => c.category === categoriaId)):(imagenList)
      setImagenes(imagenFilter)
    })
    
    
  }, [categoriaId])
  

  return (
    <div className="col-span-6 sm:col-span-3 fondo">
      <ItemList imagen={imagenes}/>

    </div> 
  )
}
export default ItemContainer