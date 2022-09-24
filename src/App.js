
import './App.css';
import { DataProvider } from './DataContext';
import Gallery from './Gallery';

function App() {
 
  return (
    <div className="App">
        <DataProvider>
          <Gallery />
        </DataProvider>
    </div>
  );
}

export default App;
