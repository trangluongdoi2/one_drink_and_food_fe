import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  setDoc
} from 'firebase/firestore'
import { FIREBASE_COLLECTION } from './collection'
import { db } from './config'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

async function getAll(itemType: FIREBASE_COLLECTION) {
  const data: any = []
  const queryData = collection(db, itemType)
  try {
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

const getAllWithQuery = async (itemType: FIREBASE_COLLECTION, queryKey: string, params: string) => {
  const data: any = []
  const queryData = query(collection(db, itemType), where(queryKey, '==', params))

  try {
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
    console.error(error)
  }
}

const getWithMultipleQuery = async (itemType: FIREBASE_COLLECTION, queryKey: string, params: string[]) => {
  const data: any = []
  const queryData = query(collection(db, itemType), where(queryKey, 'in', params))

  try {
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
    console.error(error)
  }
}

const uploadImage = async (file: File) => {
  const storage = getStorage()
  const path = `/images/${file.name}`
  const storageRef = ref(storage, path)

  try {
    await uploadBytesResumable(storageRef, file)
    const url = await getDownloadURL(storageRef).then((downloadUrl) => {
      return downloadUrl
    })

    return url
  } catch (err) {
    console.error(err)
  }
}

async function getOne(itemType: FIREBASE_COLLECTION, id: string) {
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

async function create(itemType: FIREBASE_COLLECTION, data: any) {
  const docRef = collection(db, itemType)
  await addDoc(docRef, data)
    .then(() => {
      console.log('Product has been added successfully')
    })
    .catch((error) => {
      console.log(error)
    })

  location.reload()
}

async function createWithCustomKey(itemType: FIREBASE_COLLECTION, data: any, id: string) {
  const docRef = doc(db, itemType, id)
  console.log(data, 'data firebase')
  await setDoc(docRef, data)
    .then(() => {
      console.log('Product has been added successfully')
    })
    .catch((error) => {
      console.log(error)
      console.log('?????')
    })

  location.reload()
}

async function deleteById(itemType: FIREBASE_COLLECTION, id: string) {
  const docRef = doc(db, itemType, id)
  await deleteDoc(docRef)
    .then(() => {
      console.log(`${itemType} has been deleted successfully`)
    })
    .catch((error) => {
      console.log(error)
    })
  location.reload()
}

function updateById(itemType: FIREBASE_COLLECTION, data: any, fireBaseid: string) {
  const docRef = doc(db, itemType, fireBaseid)
  updateDoc(docRef, { ...data })
    .then(() => {
      console.log('Product has been updated successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}

export const FirebaseService = {
  getAll,
  getAllWithQuery,
  getOne,
  create,
  createWithCustomKey,
  deleteById,
  updateById,
  uploadImage,
  getWithMultipleQuery
}
