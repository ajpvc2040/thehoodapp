import React, { Component } from 'react'
import { InputGroup, FormControl, Button, Modal } from 'react-bootstrap';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/newBuddy'
  })

class BuddiesNew extends Component{    

    state = {
        show : false,
        name: "Name",
        email: "e-Mail",
        phone: "Phone"
    }

    handleClose = () => this.setState(prevState=>({
        ...prevState.name,
        ...prevState.email,
        ...prevState.phone,
        show:false
    }));

    handleShow = () => this.setState(prevState=>({
        name: "Name",
        email: "e-Mail",
        phone: "Phone",
        show:true
    }));

    handleSave = () => {

        console.log(this.props.buddy);

        const buddy = {
            houseId: this.props.house.houseId,
            name : this.state.name,
            email : this.state.email,
            phone : this.state.phone,
        }

        console.log(buddy);

        api.post("/", buddy).then(response => {
            this.props.updateTable();
            this.handleClose();
        });        
    }

    constructor(props){
        super(props);
        this.setState({
            show : false,
            name: "Name",
            email: "e-Mail",
            phone: "Phone",
        })
    }
    
    render(){
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>New Buddy</Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            New Buddy
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
                                    value = {this.state.buddyName}
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>e-Mail</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="e-Mail"
                                    aria-label="e-Mail"
                                    aria-describedby="basic-addon1"
                                    value = {this.state.buddyEmail}
                                    onChange={e => this.setState({ email: e.target.value })}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Phone</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Phone"
                                    aria-label="Phone"
                                    aria-describedby="basic-addon1"
                                    value = {this.state.buddyPhone}
                                    onChange={e => this.setState({ phone: e.target.value })}
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

export default BuddiesNew;