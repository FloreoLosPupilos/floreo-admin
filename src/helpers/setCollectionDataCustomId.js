import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc} from 'firebase/firestore/lite';

export const setCollectionDataCustomId = async (collectionName, data, id) => {
  const newDoc = doc( collection( FirebaseDB, collectionName ), id );
  await setDoc(newDoc, data);
}