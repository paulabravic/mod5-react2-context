import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const {photos,setPhotos} = useContext(PhotosContext);

  return <div className="gallery grid-columns-5 p-3">
    
    {photos.map((element, index)=><div key={index} className="photo" style={{backgroundImage:`url(${element.src.tiny})`}}>
      <IconHeart filled={element.liked} index={index}/>
    </div>)}

  </div>;
};
export default Gallery;
