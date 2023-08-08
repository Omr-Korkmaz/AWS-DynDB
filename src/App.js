import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text  } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';


import SiteFooter from './components/comman/SiteFooter';
import SiteNav from './components/comman/SiteNav';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';

import '@aws-amplify/ui-react/styles.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@aws-amplify/ui-react/styles.css';
// import Contacts from './components/contacts/Contacts';



Amplify.configure(awsExports);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="Contacts App"
            src="/img/logo.png"
          />
        </View>
      );
    },
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; 2022 Cumulus Cycles 
          </Text>
        </View>
      );
    },
  };

  return (
    <Authenticator loginMechanisms={['email']} components={components}>
    {({ signOut, user }) => (
      <div>
        <SiteNav logOut={signOut} />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' exact={true} element={<HomePage />} />
          {/* <Route path='/contacts' element={<Contacts />} /> */}

        </Routes>
        <SiteFooter />
      </div>
    )}
    </Authenticator>
  );
}

export default App;