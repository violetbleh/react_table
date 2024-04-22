import logo from './logo.svg';
import './App.css';

import Third from './components1/Third';
import { Route, Routes } from 'react-router-dom';
import First from './components1/First';
import Second from './components1/Second';
import Tata from './components1/Tata';
import Field from './components1/Field';



function App() {
  return (
    <div className="App">
      
<Third/>
        <Routes>
          <Route path='/' element={<First/>}/>
          <Route path='/s' element={<Second/>}/>
          <Route path='/z' element={<Field/>}/>
        </Routes>
    
    </div>
  );
}

export default App;
