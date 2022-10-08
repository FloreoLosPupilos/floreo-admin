import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc } from 'firebase/firestore/lite';
import { addCustomServices, startLoadingCategories, startLoadingMembers, startLoadingServices } from '../store/collections/thunks';

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

export const setMembersData = async (collectionName, data, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName));
  await setDoc(newDoc, data);
  dis(startLoadingMembers());
}

export const setServicesData = async (collectionName, data, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName));
  await setDoc(newDoc, data);
  const addService = { nombre: data.nombre, informacion: data.informacion, precio: data.precio, categoria: data.categoria, id: newDoc.id };
  dis(startLoadingServices());
  dis(addCustomServices(addService));
}