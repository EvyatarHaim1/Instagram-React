import React, {useState} from 'react';
import { Button, Input} from '@material-ui/core';
import { db, storage} from '../firebase';
import styled from 'styled-components';
import firebase from 'firebase';

function ImageUpload({ username }) {
   
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
      if(e.target.files[0]){
          setImage(e.target.files[0]);
      }
    }

    const handleUpload = () => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              // progress function...
              const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
          },
           (error) => {
               // Error function...
               console.log(error);
               alert(error.message);
           },
           () => {
               // Complete function...
               storage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                      // post image inside db
                      db.collection("posts").add({
                          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                          caption: caption,
                          postImg: url,
                          username: username,
                      });

                      setProgress(0);
                      setCaption("");
                      setImage(null);
                  })
           }
      )
    }

    return (
        <div>
            <progress value={progress} max="100" />
            <Input type="text" 
                   placeholder="Enter a caption..." 
                   onChange={event => setCaption(event.target.value)}
                   value={caption}
            />
            <Input type="file" onChange={handleChange} />
            <Button className="imageUploadBtn" 
                    onClick={handleUpload}>
                        Upload
                    </Button>
        </div>
    )
}

export default ImageUpload;
