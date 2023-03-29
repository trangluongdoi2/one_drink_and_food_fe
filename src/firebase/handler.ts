import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc, query, where } from 'firebase/firestore'
import { FIREBASE_COLLECTION } from './collection'
import { db } from './config'

interface GetAllProps {
  itemType: FIREBASE_COLLECTION
  query: string
}

export async function getAll(itemType: FIREBASE_COLLECTION, params?: string) {
  const data: any = []
  const queryData = params ? query(collection(db, itemType), where('member', '==', params)) : collection(db, itemType)
  try {
    // const querySnapshot = await getDocs(collection(db, itemType))
    const querySnapshot = await getDocs(queryData)
    querySnapshot.forEach((doc) => {
      const dataObject = {
        ...doc.data(),
        fireBaseId: doc.id
      }
      data.push(dataObject)
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function getOne(itemType: FIREBASE_COLLECTION, id: string) {
  try {
    const docRef = doc(db, itemType, id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        ...docSnap.data(),
        fireBaseId: docSnap.id
      }
    }
    return {}
  } catch (error) {
    console.log(error)
  }
}

export async function addItem(itemType: FIREBASE_COLLECTION, data: any) {
  const docRef = collection(db, itemType)
  await addDoc(docRef, data)
    .then(() => {
      console.log('Product has been added successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function deleteItem(itemType: FIREBASE_COLLECTION, id: string) {
  const docRef = doc(db, itemType, id)
  await deleteDoc(docRef)
    .then(() => {
      console.log(`${itemType} has been deleted successfully`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export function updateItem(itemType: FIREBASE_COLLECTION, data: any, fireBaseid: string) {
  const docRef = doc(db, itemType, fireBaseid)
  updateDoc(docRef, { ...data })
    .then(() => {
      console.log('Product has been updated successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}
