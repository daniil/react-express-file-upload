import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app">
      <h1>Image Upload Form</h1>
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
        <button>
          Upload Image
        </button>
      </form>
    </div>
  );
}

export default App;
