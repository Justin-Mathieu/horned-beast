import React from 'react';
class Beast extends React.Component {
  render() {
    return (
      <>
      <h3>{this.props.name}</h3>
      <img src ={this.props.src} alt = 'horned thing'/>
      <p>{this.props.description}</p>
      </>
    )
  }
}
export default Beast;