import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/newHood'
  })

class HoodsNew extends Component{    

    state = {
        show : false,
        hoodName : "Name"
    }

    handleClose = () => this.setState(prevState=>({
        ...prevState.hoodName,
        show:false
    }));

    handleShow = () => this.setState(prevState=>({
        hoodName:"Name",
        show:true
    }));

    handleSave = () => {
        const hood = {
            hoodId : null,
            name : this.state.hoodName,
            balance : 0
        }

        console.log(hood.hoodName)

        api.post("/",hood).then(response => {
            this.props.updateTable();
            this.handleClose();
        });        
    }

    constructor(){
        super();
    }
    
    render(){
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>New Hood</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            New Hood
                        </Modal.Title>
                        <Modal.Body>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                    value = {this.state.hoodName}
                                    onChange={e => this.setState({ hoodName: e.target.value })}
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

export default HoodsNew;