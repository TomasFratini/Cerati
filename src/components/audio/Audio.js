import teParaTres from "./teparatres.mp3"

const Audio = () => {

  return (
    
     <audio controls className="position-nav audio">
        <source type="audio/mpeg" src={teParaTres}>
        </source>
    </audio>
     
  )
}
export default Audio