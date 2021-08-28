import { storage, firestore, timestamp } from '../../config'

export const saveFile = async (file: any, fileTitle: string, subject: string) => {
  //Save file on storage
  const storageRef = storage.ref()
  const fileRef = storageRef.child(file.name)
  await fileRef.put(file)
  //Save file on database
  await fileRef.getDownloadURL().then((url: string) => {
    const collection = firestore.collection('files')
    collection.doc().set({
      title: fileTitle,
      url: url,
      subject: subject,
      timestamp: timestamp(),
    })
  })
}

export const saveUsers = async () => {
  const collection = firestore.collection('users')
  await collection.doc().set({
    userId: 'LEgiZNmu2GZYOR6MVH5g5L82gnT2',
    type: 'docente'
  })

  await collection.doc().set({
    userId: '49mmSlO5TuWKOqcECtjil2aA5EV2',
    type: 'estudiante'
  })
}