import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import SiteFooter from './components/comman/SiteFooter';
import SiteNav from './components/comman/SiteNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsExports)
function App() {
  return (
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}

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
    </Authenticator>
  );
}

export default App;
