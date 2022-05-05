import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';
// forget to switch to new branch...

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0

    }
  }
  clickHandler = () => {
    this.setState({ clicks: this.state.clicks + 1 });

  }

  render() {
    return (
      <>
        <Card style={{ width: '50%' }}>
          <Card.Img variant="top" src={this.props.src} alt={this.props.alt} />
          < Card.Body >
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}

            </Card.Text>
            <Button variant="primary" onClick={this.clickHandler} >Vote!</Button> 💟{this.state.clicks}
            <Button onClick={() => this.props.handleOpenModal(this.props.title)}>view img</Button>

          </Card.Body>
        </Card>
      </>
    )
  }
}
export default Beast;