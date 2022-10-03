import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { startLoadingCategories, startLoadingMembers, startLoadingServices } from '../store/collections/thunks';

export const setCollectionDataCustomId = async (collectionName, data, id, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName), id);
  await setDoc(newDoc, data);
  dis(startLoadingCategories());
}

export const setServicesCustomId = async (collectionName, data, id, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName), id);
  await setDoc(newDoc, data);
  dis(startLoadingServices());
}

export const setMembersCustomId = async (collectionName, data, id, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName), id);
  await setDoc(newDoc, data);
  dis(startLoadingMembers());
}