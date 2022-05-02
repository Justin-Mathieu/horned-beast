import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ImageModal from './imageModal';
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
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              {this.props.description}

            </Card.Text>
            <Button variant="primary" onClick={this.clickHandler} >Vote!</Button> 💟{this.state.clicks}
            <Button onCick={this.props.handleShow}>view img</Button>

          </Card.Body>
        </Card>
        <ImageModal />
      </>
    )
  }
}
export default Beast;