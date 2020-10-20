import React from 'react';
import Router from './Router';
import { TopBar, Footer } from './common';

const App = () => {
  return (
    <>
      <TopBar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
