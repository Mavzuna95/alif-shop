import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css'
import {Route, Routes } from 'react-router-dom';
import HomePageComponent from './components/home/HomePageComponent';
import AuthorComponent from './components/auth/AuthorComponent';

function App() {
    return (
      <div>      
      {!JSON.parse(localStorage.getItem('auth')) ? <AuthorComponent /> :
        <Routes>
        <Route path='/*' element={<HomePageComponent/>} />
        </Routes>
      }
      </div>
      );
  }
  
export default App;
