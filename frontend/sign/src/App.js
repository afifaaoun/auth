import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<SignIn/>}/>
        

      </Routes>
      
    </div>
  );
  
}

export default App;
