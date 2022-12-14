import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';



export const loadingImages = async() => {

    const collectionRef = collection(FirebaseDB, `carrusel`);
    const docs = await getDocs(collectionRef);
    
    const images = [];

    docs.forEach( doc => {
        images.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return images;
}