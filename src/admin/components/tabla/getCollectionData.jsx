import React, { useEffect, useState } from 'react';

//Firebase
import { collection, getDocs, doc } from "firebase/firestore/lite";
import { FirebaseDB } from '../../../firebase/config';


export default function GetCollectionData(props,bool) {
  const [collections, setCollections] = useState([]);
  let docCollection = collection(FirebaseDB, props.collection);
  
  //Verifica si es un servicio
  if (bool) {
    docCollection = collection(FirebaseDB, 'Categorias',props.collection, 'Servicios');
  }
  useEffect(() => {
    const getCollections = async () => {
      const data = await getDocs(docCollection);
      setCollections(data.docs.map((doc) => ({ ...doc.data(), id: doc.id , category: props.collection})));
    };
    getCollections();
  }, []);
  return (collections);
}