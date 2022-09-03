import { loadingImages } from '../../helpers';
import { addNewImage, savingNewImage, setImages } from './carruselSlice';
import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';


export const startLoadingImages = () => {
    
    return async(dispatch) => {

        const images = await loadingImages();
        
        dispatch( setImages( images ) );
    }
    
};



export const startNewImage = ( url ) => {
    return async(dispatch) => {

        dispatch(savingNewImage());
        
        const newImage = {
            url: url,
        };


        const newDoc = doc( collection( FirebaseDB, `carrusel` ) );
        await setDoc(newDoc, newImage);

        newImage.id = newDoc.id;

        dispatch(addNewImage( newImage ));
        
    }
};
