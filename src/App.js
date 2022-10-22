import './styles/_resets.scss'
import './App.css';
import Header from './Header/Header';
import Home from './Pages/home';
import About from './Pages/about';
import User from './Pages/User';
import UserID from './Pages/Users/UserID';
import Errors from './Errors/Errors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/user/:userName' element={<UserID/>} />
          <Route path='*' element={<Errors/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
