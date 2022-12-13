import { useState } from 'react';
import axios from 'axios';
import './UploadForm.css';

const UploadForm = ({ fetchImages }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imageTitle', e.target.imageTitle.value);
    formData.append('imageDescription', e.target.imageDescription.value);
    formData.append('imageFile', e.target.imageFile.files[0]);

    setIsUploading(true);

    axios
      .post('http://localhost:5050/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(() => {
        setIsUploading(false);
        fetchImages();
        e.target.reset();
      })
      .catch((err) => {
        console.log('Error:', err);
        setIsUploading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input-element">
          <label className="input-element__label">
            Image Title
          </label>
          <input
            className="input-element__field"
            name="imageTitle"
            type="text"
            required
          />
        </div>
        <div className="input-element">
          <label className="input-element__label">
            Image Description
          </label>
          <textarea name="imageDescription" required></textarea>
        </div>
        <div className="input-element">
          <label className="input-element__label">
            Image File
          </label>
          <input
            className="input-element__field"
            name="imageFile"
            type="file"
            required
          />
        </div>
        <button disabled={isUploading}>
          Upload Image
        </button>
      </form>
  )
}

export default UploadForm;