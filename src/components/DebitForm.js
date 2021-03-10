import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HousesCombo from './HousesCombo';
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';

class DebitForm extends Component {

    state = {
        hoodId : 1,
        house : 0,
        concept : "",
        amount : 0 
    }

    handleHouseChange(houseId){
        this.setState({
            ...this.state.hoodId,
            ...this.state.concept,
            ...this.state.amount,
            house:houseId
        }, console.log("force refresh"))
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign:'center'}}>Debits</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HousesCombo hood={this.state.hoodId} handleHouseChange={obj=>this.handleHouseChange(obj)}></HousesCombo>
                    </Col>
                </Row>
                <Row>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Concept</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Concept"
                            aria-label="Concept"
                            aria-describedby="basic-addon1"
                            value = {this.state.concept}
                            onChange={e => this.setState({ concept: e.target.value })}
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Amount"
                            aria-label="Amount"
                            aria-describedby="basic-addon1"
                            value = {this.state.amount}
                            onChange={e => this.setState({ amount: e.target.value })}
                        />
                    </InputGroup>
                </Row>
                <Row>
                    <Button variant="secondary">
                        Cancel
                    </Button>
                    <Button variant="primary">
                        Save
                    </Button>
                    {JSON.stringify(this.state)}
                </Row>
            </Container>
        );
    }

}

export default DebitForm;