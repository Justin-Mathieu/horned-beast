
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './footer';
import BeastData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageModal from './imageModal';

// forget to switch to new branch...

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false

    }
  }
  handleClose = () => {
    this.setState({ showModal: false });

  }
  handleShow = () => {
    this.setState({ showModal: true })
  }
  render() {
    return (
      <div className='App'>
        <Header />
        <Main beastData={BeastData} handleshow={this.handleShow} />
        <ImageModal showModal={this.state.showModal} handleClose={this.handleClose} />
        <Footer />
      </div>
    );
  }
}

export default App;
