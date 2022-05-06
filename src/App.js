
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './footer';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import FormOfHorns from './FormOfHorns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      beastData: beastData

    }
  }
  // handleFormClick = (event) => {
  //   event.preventDefault();
  //   if (event.target.value === "one")
  //     let newBeastData = beastData.filter(obj => obj.horns === 1)

  // }
  handleCloseModal = () => {
    this.setState({ showModal: false });

  };

  handleOpenModal = (beastName) => {
    let selectedBeast = beastData.find(beast => beast.title === beastName);
    this.setState({ showModal: true, selectedBeast });
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <FormOfHorns />
        <Main beastData={this.state.beastData} handleOpenModal={this.handleOpenModal} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleCloseModal} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>
    );
  }
}

export default App;
