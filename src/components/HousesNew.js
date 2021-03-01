import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/newHouse'
  })

class HousesNew extends Component{    

    state = {
        show : false,
        houseCode: "Code"
    }

    handleClose = () => this.setState(prevState=>({
        ...prevState.houseCode,
        show:false
    }));

    handleShow = () => this.setState(prevState=>({
        houseCode:"Code",
        show:true
    }));

    handleSave = () => {

        console.log(this.props.hood);

        const house = {
            hoodId: this.props.hood.hoodId,
            id : null, 
            houseCode : this.state.houseCode,
            balance : 0
        }

        console.log(house);

        api.post("/", house).then(response => {
            this.props.updateTable();
            this.handleClose();
        });        
    }

    constructor(props){
        super(props);
        this.setState({
            show : false,
            houseCode: "Code"
        })
    }
    
    render(){
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>New House</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            New House
                        </Modal.Title>
                        <Modal.Body>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Code</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Code"
                                    aria-label="Code"
                                    aria-describedby="basic-addon1"
                                    value = {this.state.houseCode}
                                    onChange={e => this.setState({ houseCode: e.target.value })}
                                />
                            </InputGroup>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={this.handleSave}>
                                Save
                            </Button>
                        </Modal.Body>
                        <Modal.Footer>
                            
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }

}

export default HousesNew;