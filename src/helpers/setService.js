import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc} from 'firebase/firestore/lite';

export const setService = async (collectionName, data, id) => {
  const newDoc = doc( collection( FirebaseDB, collectionName, id, 'Servicios' ) );
  await setDoc(newDoc, data);
}