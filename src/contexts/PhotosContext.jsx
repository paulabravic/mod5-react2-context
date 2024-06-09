//Exportamos el contexto (sin default) y el provider (con default)
import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();

export default function PhotosProvider({ children }) {

    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {

        try {
            const response = await fetch("/photos.json");
            const { photos: photosdb } = await response.json();
            setPhotos(photosdb);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            {children}
        </PhotosContext.Provider>
    )
}

