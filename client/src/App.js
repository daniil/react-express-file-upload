import { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from './components/UploadForm/UploadForm';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios
      .get('http://localhost:5050/image-gallery')
      .then(res => {
        setImages(res.data);
      })
      .catch(console.log);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="app">
      <h1>Image Upload Form</h1>
      <UploadForm fetchImages={fetchImages}/>
      {
        images.length ? (
          <ImageGallery images={images}/>
        ) : null
      }
    </div>
  );
}

export default App;
