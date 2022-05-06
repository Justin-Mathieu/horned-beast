import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class FormOfHorns extends React.Component {


    handleFilterClick = (event) => {
        const filteredBeasts = parseInt(event.target.value);
        let correctBeasts = this.props.beastData;

        if (filteredBeasts) {
            correctBeasts = this.props.beastData.filter(beast => beast.horns === filteredBeasts);
        }
        this.props.handleFormClick(correctBeasts);
    };


    render() {

        return (
            <Container>
                <Form>
                    <Form.Control as='select' onChange={this.handleFilterClick}>
                        <option value=''>All Creatures</option>
                        <option value='1'>Creatures that have 1 horn</option>
                        <option value="2">Creatures that have 2 horns</option>
                        <option value='3'>Creatures that have 3 horns</option>
                        <option value='100'>Creatures that have a lot of horns</option>



                    </Form.Control>


                </Form>
            </Container>

        )
    }
}
export default FormOfHorns;