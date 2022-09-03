import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase/config'
import { v4 } from 'uuid';


export const fileUpload = async( file ) => {
    
    const storageRef = ref(storage, `carrusel/${v4()}`); //referencia al storage de firebase
    await uploadBytes(storageRef, file);
    const urlImage = await getDownloadURL(storageRef);
    
    return urlImage;
}
