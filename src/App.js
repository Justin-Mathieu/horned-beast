
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './footer';
import images from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

// forget to switch to new branch...

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main images={images} />
        <Footer/>
      </div>
    );
  }
}

export default App;
