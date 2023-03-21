import Card from './Card'

const ItemList = ({imagen}) => {


  return (
    <div className='flex flex-wrap gap-20 justify-center pt-5'>
        {imagen.map(i => <Card key={i.id} imagen={i}/>)}
    </div>
  )
}
export default ItemList