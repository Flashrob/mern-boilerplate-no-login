import React from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { AppBarMaterialUI as AppBar } from './components/AppBar';
function App() {
  return (
    <div className='App'>
      <AppBar />
      <LandingPage />
    </div>
  );
}

export default App;
