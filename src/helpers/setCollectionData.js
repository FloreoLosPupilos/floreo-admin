import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc} from 'firebase/firestore/lite';

export const setCollectionData = async (collectionName, data) => {
  const newDoc = doc( collection( FirebaseDB, collectionName ) );
  await setDoc(newDoc, data);
}