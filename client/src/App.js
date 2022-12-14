import { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from './components/UploadForm/UploadForm';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  // This function fetches the list of images from the API
  const fetchImages = () => {
    axios
      .get('http://localhost:5050/image-gallery')
      .then(res => {
        setImages(res.data);
      })
      .catch(console.log);
  }
  
  // Load the images when the component first loads
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="app">
      <h1>Image Upload Form</h1>

      {/* The image upload component */}
      <UploadForm fetchImages={fetchImages}/>
      
      {/* Show the gallery component only when there are images from API */}
      {
        images.length ? (
          <ImageGallery images={images}/>
        ) : null
      }
    </div>
  );
}

export default App;
