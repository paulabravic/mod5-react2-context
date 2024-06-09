import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";

const Favorites = () => {

  const { photos, setPhotos } = useContext(PhotosContext);

  const favoritePhotos = photos.filter(photo => photo.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        
        {favoritePhotos.map((element, index) => <div key={index} className="photo" style={{ backgroundImage: `url(${element.src.tiny})` }}>
        </div>)}

      </div>
    </div>
  );
};
export default Favorites;
