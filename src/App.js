//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

function App() {
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage /> }/>
          <Route path='/students' element={<Students/>} />
          <Route path='/addstudent' element={<AddStudent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
