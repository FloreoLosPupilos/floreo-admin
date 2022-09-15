import React, { useEffect, useState } from 'react';

//Firebase
import {collection, getDocs, doc } from "firebase/firestore/lite";
import { FirebaseDB } from '../../../firebase/config';


export default function GetCollectionData(props) {
  const [collections, setCollections] = useState([]);

  const docCollection = collection(FirebaseDB, props.collection);
  useEffect(() => {
    const getCollections = async () => {
      const data = await getDocs(docCollection);
      setCollections(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCollections();
  }, []);
  return (collections);
}