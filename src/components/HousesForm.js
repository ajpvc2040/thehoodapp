import React, { Component } from 'react'
import HousesTable from './HousesTable';
import { Container, Row, Col } from 'react-bootstrap';

class HousesForm extends Component {

    state = {
        hood : {
            hoodId : 2,
            hoodName : "Abedules",
            balance : 0
        }        
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center'}}>Houses</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HousesTable hood = {this.state.hood}></HousesTable>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default HousesForm;