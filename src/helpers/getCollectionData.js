import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const getCollectionData = async (collectionName) => {

  const collectionRef = collection(FirebaseDB, collectionName);
  const docs = await getDocs(collectionRef);

  const data = [];
  docs.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  })
  return data;

}
