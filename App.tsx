import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import Routes from './src/routes';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />        
    </>
  );
};

export default App;
