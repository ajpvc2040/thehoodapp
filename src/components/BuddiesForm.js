import React, { Component } from 'react'
import BuddiesTable from './BuddiesTable';
import { Container, Row, Col } from 'react-bootstrap';

class BuddiesForm extends Component {

    state = {
        house : {
            houseId : 457,
            houseCode : "16",
            balance : 0
        }        
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center'}}>Buddies</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BuddiesTable house = {this.state.house}></BuddiesTable>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default BuddiesForm;