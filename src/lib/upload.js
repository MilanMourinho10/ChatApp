import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase';


const upload = async (file) => {

  const date = new Date()
  const storageRef = ref(storage, `images/${date + file.name}`);

  // Start a upload
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Return a Promise
  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Uppdatera uppladdningsstatusen
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        
      },
      (error) => {
        // Hantera fel
        reject("Something went wrong! " + error.message); // Förbättra felmeddelandet
      },
      () => {
        // Hantera framgång
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default upload;
