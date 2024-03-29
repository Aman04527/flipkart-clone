import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { firestore } from "../config/firebase.config"

//Saving new item
export const saveItem = async(data) =>{
    await setDoc(doc(firestore,"ProductItems" , `${Date.now()}`) , data,{
        merge: true,
    });
};

//get All prodcut items
export const getAllProductItems = async () => {
  const items = await getDocs(query(collection(firestore, 'ProductItems'), orderBy('id')));

  return items.docs.map((doc) => doc.data());
};