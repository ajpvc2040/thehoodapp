import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import HoodsNew from './HoodsNew'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/hoods'
  })

class HoodsTable extends Component{

    state = {
        hoods : []
      }
      
    constructor(){
        super();
        this.refreshData();
    }

    refreshData(){
        api.get('/').then(res =>{
            this.setState({hoods : res.data},()=>console.log("force update"))
        });
    }

    render(){
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hoods.map(hood => 
                                <tr key={hood.id}>
                                    <td>{hood.id}</td>
                                    <td>{hood.name}</td>
                                    <td>{hood.balance}</td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                <HoodsNew updateTable={()=>this.refreshData()}></HoodsNew>
            </div>
        );
    }

}

export default HoodsTable;