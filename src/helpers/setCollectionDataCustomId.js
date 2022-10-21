import { FirebaseDB } from '../firebase/config';
import { doc, collection, setDoc, updateDoc } from 'firebase/firestore/lite';
import { addCustomServices, startLoadingCategories, startLoadingMembers, startLoadingOrders, startLoadingServices } from '../store/collections/thunks';

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

export const updateOrderState = async (collectionName, data, estado, dis) => {
  const newDoc = doc(collection(FirebaseDB, collectionName), data.id);
  const setData = {
    canton: data.canton, direccion: data.direccion, distrito: data.distrito, estado: estado,
    fecha: data.fecha, hora: data.hora, nombre: data.nombre, provincia: data.provincia,
    servicios: data.servicios, telefono: data.telefono, total: data.total, ubicacion: data.ubicacion
  };
  await setDoc(newDoc, setData);
  dis(startLoadingOrders());
}