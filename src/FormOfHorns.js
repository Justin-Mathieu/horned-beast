import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class FormOfHorns extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <Form.Control as='select'>
                        <option value='one'>Creatures that have 1 horn</option>
                        <option value="two">Creatures that have 2 horns</option>
                        <option value='three'>Creatures that have 3 horns</option>
                        <option value='alot'>Creatures that have a lot of horns</option>

                    </Form.Control>


                </Form>
            </Container>

        )
    }
}
export default FormOfHorns;