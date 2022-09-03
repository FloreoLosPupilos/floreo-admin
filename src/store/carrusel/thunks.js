import { loadingImages } from '../../helpers';
import { addNewImage, deleteImage, savingNewImage, setImages } from './carruselSlice';
import { doc, collection, setDoc, deleteDoc} from 'firebase/firestore/lite';
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

export const deleteImageFromCloudStorage = (imageID) => {
    return async(dispatch ) => {
        
        const docRef = doc(FirebaseDB, 'carrusel', imageID);
        deleteDoc(docRef).then(() => {
            console.log("Entire Document has been deleted successfully.")
        }).catch(error => {
            console.log(error);
        });   
        
        dispatch(deleteImage(imageID));

    }

};
