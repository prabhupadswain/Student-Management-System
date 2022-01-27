//import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

function App() {
  //<img src={logo} className="App-logo" alt="logo" />
  return (
    <div>
     
        <Navbar />
        <HomePage />
        <Students />
        <AddStudent />
     
    </div>
  );
}

export default App;
