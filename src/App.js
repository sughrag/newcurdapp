import Home from './Components/Home';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpCreate from './Components/EmpCreate';
import EmpDetails from './Components/EmpDetails';
import EmpEdit from './Components/EmpEdit';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetails />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;


