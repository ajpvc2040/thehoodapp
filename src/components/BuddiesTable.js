import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import BuddiesNew from './BuddiesNew'
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
  })

class BuddiesTable extends Component{

    state = {
        buddies : []
      }
      
    constructor(props){
        super(props);
        this.refreshData();
    }

    refreshData(){
        console.log(this.props.house)
        api.get('buddies/',{
            params : {
                houseId : this.props.house.houseId
            }
        }).then(res =>{
            res.data.sort((a, b) => a.buddyId - b.buddyId);
            this.setState({buddies : res.data},()=>console.log("force update"))
        });
    }

    deleteData(buddyParm){
        console.log("a del");
        console.log(buddyParm)
        try{

            api.delete('deleteBuddy/', {data:buddyParm}).then(res =>{
                this.refreshData();
            });

        } catch(e){
            console.log("catched exception");
            console.log(e);
        }
        console.log("d del");
    }

    render(){
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>e-Mail</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.buddies.map(buddy => 
                                <tr key={buddy.buddyId}>
                                    <td>{buddy.buddyId}</td>
                                    <td>{buddy.name}</td>
                                    <td>{buddy.email}</td>
                                    <td>{buddy.phone}</td>
                                    <td>
                                        <Button variant="danger" 
                                            onClick=
                                            {() => 
                                                { 
                                                    if (window.confirm('Are you sure you wish to delete this item?')){
                                                        console.log("a delete");
                                                        this.deleteData(buddy);
                                                        console.log("d delete");
                                                    }
                                                        
                                                }
                                            }>Delete</Button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                <BuddiesNew house={this.props.house} updateTable={()=>this.refreshData()}></BuddiesNew>
            </div>
        );
    }

}

export default BuddiesTable;