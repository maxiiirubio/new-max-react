 import { async } from "@firebase/util";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import {db} from "./config";

const productRef = collection(db, "productos");

export const getProducts = async (marca) =>{
  const products = []
  const category = marca
    ? query(productRef, where("marca", "==", marca))
    : productRef;
  const querySnapshot = await getDocs(category);
  
  querySnapshot.forEach((doc) => {
  products.push({...doc.data(), id: doc.id})
});

  return products
};

export const getProduct = async (productId) => {
  const documento = doc(db, "productos", productId);
  const docSnap = await getDoc(documento);

  if(docSnap.exists()){
    return {id: docSnap.id, ...docSnap.data()};
  }
  return null;
}; 
