import React from 'react';
import Modal from 'react-bootstrap/Modal';

class ImageModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body conten0t</Modal.Body>
                </Modal>
            </>
        )
    }
}
export default ImageModal;