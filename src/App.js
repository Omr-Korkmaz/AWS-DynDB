import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import SiteFooter from './components/comman/SiteFooter';

import SiteNav from './components/comman/SiteNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';


function App() {
  return (
    <div>
     <SiteNav />
     <Routes>
      <Route path='*' element= {< HomePage />} />
      <Route path='/' exact= {true} element= {< HomePage />} />

      <Route path='/login' element= {< LoginPage />} />
      <Route path='/register' element= {< RegisterPage />} />


     </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
