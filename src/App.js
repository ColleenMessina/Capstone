import React from 'react';
import './App.css';
import HeaderComponent from './Header';
import NavComponent from './Nav';
import MainComponent from './Main';
import FooterComponent from './Footer';
function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <NavComponent />
      <MainComponent />
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;