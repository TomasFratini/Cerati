import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState({})

    const {imagenId} = useParams()

    useEffect(() => {
      const db = getFirestore()

      const imagenes = collection(db, 'fotos')

      getDocs(imagenes).then((snap) => {
        const imagenList = []
        snap.docs.forEach(i => {
            imagenList.push( { id: i.id, ...i.data()})
        });
        setDetalle(imagenList.find(p => p.id === imagenId))
      })
    

    },[imagenId])
    

  return (
    <div className="flex justify-center">
        <ItemDetail detalle={detalle}/>
    </div>
  )
}
export default ItemDetailContainer