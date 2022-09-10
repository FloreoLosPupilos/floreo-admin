import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';



export const loadingSection = async() => {

    const collectionRef = collection(FirebaseDB, `about/section/information`);
    const docs = await getDocs(collectionRef);
    
    const information = [];

    docs.forEach( doc =>{
        information.push({ id: doc.id, ...doc.data() });
    });

    return information;

}