import './App.css';
import images from './Images';

function App() {
  return (
    <div className="App">
        <div className="container">
          <img src='' alt='selected' className='selected' />
          <div className="imgContainer">
            {
              images.map((image,index) => <img key={index} src={image} alt='dog'/>)
            }
          </div>
        </div>
    </div>
  );
}

export default App;
