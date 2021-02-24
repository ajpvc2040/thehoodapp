import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
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
        api.get('/').then(res =>{
          console.log(res.data)
          this.setState({hoods : res.data})
        });
      }

    render(){
        return (
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
        );
    }

}

export default HoodsTable;