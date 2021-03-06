import React, { Component } from 'react'
import HoodsTable from './HoodsTable';
import { Container, Row, Col } from 'react-bootstrap';

class HoodsForm extends Component {

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center'}}>Hoods</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HoodsTable></HoodsTable>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default HoodsForm;