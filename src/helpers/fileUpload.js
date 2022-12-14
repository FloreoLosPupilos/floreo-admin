import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import {  storage } from '../firebase/config'
import { v4 } from 'uuid';

export const fileUpload = async( file, path = 'carrusel' ) => {
    
    const storageRef = ref(storage, `${path}/${v4()}`); //referencia al storage de firebase
    await uploadBytes(storageRef, file);
    const urlImage = await getDownloadURL(storageRef);
    return [storageRef.name, urlImage];
};


export const deleteImage = async(imageName) => {
    const storageRef = ref(storage, `carrusel/${imageName}`);
    deleteObject(storageRef).then().catch((error) => {
        console.log(error);
    })

};

