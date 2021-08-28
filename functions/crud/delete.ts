import { firestore, storage } from '../../config'
import { FileOnDelete } from '../../types/types'

export const deleteSelectedFiles = async (filesCheked: Array<FileOnDelete>) => {
  //Delete selected files of storage
  if (filesCheked) {
    const storageRef = storage.ref()
    await storageRef.listAll().then((listResults) => {
      listResults.items.map((item) => {
        item.getDownloadURL().then((url) => {
          const fileSelected = filesCheked.find((file) => file.url === url)
          fileSelected && item.delete()
        })
      })
    })
    //Delete selected files of database
    await firestore
      .collection('files')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const fileSelected = filesCheked.find(
            (file) => doc.data().url === file.url,
          )
          fileSelected && firestore.collection('files').doc(doc.id).delete()
        })
      })
  }
}
