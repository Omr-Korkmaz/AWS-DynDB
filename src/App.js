import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import SiteFooter from './components/comman/SiteFooter';
import SiteNav from './components/comman/SiteNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';

import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsExports)
function App() {
  return (
      <Authenticator>
        {({ signOut, user }) => (
         

    <div>
     <SiteNav logOut = {signOut} />
     <Routes>
      <Route path='*' element= {< HomePage />} />
      <Route path='/' exact= {true} element= {< HomePage />} />




     </Routes>
      <SiteFooter />
    </div>
      )}
    </Authenticator>

        )}

export default App;
