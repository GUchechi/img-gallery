import { useState } from 'react';
import './App.css';
import images from './Images';

function App() {
  const [ selectedImg, setSelectedImg] = useState(images[0])
  return (
    <div className="App">
        <div className="container">
          <img src={selectedImg} alt='selected' className='selected' />
          <div className="imgContainer">
            {
              images.map((image,index) => <img 
              style={{border: selectedImg === image ? '5px solid purple' : ""}}
              key={index} 
              src={image} 
              alt='dog'
              onClick={() => setSelectedImg(image)} />
              ) 
            }
          </div>
        </div>
    </div>
  );
}

export default App;
