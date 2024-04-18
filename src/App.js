import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
function App() {
  return (
    <React.Fragment>
      <body>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </body>
    </React.Fragment>
  );
}

export default App;
