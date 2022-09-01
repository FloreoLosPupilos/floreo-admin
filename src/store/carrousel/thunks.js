import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadImages } from '../../helpers';
import { addNewImage, savingNewImage } from './';

export const startNewImage = () => {
    return async( dispatch) => {
        
        dispatch( savingNewImage() )

        const newImage = {
            title: '',
            url: ''
        }

        // const newDoc = doc( collection( FirebaseDB, `imagenes/carrusel/imagenes` ) );
        const newDoc = doc( collection( FirebaseDB, `carrusel` ) );
        await setDoc(  newDoc, newImage);

        newImage.id = newDoc.id;

        //! dispatch
        dispatch(addNewImage( newImage ));

    }
};

export const startLoadingImages = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe'); //* esto nunca debe de suceder

        await loadImages();

    }
}


