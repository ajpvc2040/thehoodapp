import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import HoodsNew from './HoodsNew'
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
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
        api.get('hoods/').then(res =>{
            this.setState({hoods : res.data},()=>console.log("force update"))
        });
    }

    deleteData(hoodParm){
        console.log("a del");
        console.log(hoodParm)
        try{

            api.delete('deleteHood/', {data:hoodParm}).then(res =>{
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
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hoods.map(hood => 
                                <tr key={hood.hoodId}>
                                    <td>{hood.hoodId}</td>
                                    <td>{hood.name}</td>
                                    <td>{hood.balance}</td>
                                    <td>
                                        <Button variant="danger" 
                                            onClick=
                                            {() => 
                                                { 
                                                    if (window.confirm('Are you sure you wish to delete this item?')){
                                                        console.log("a delete");
                                                        this.deleteData(hood);
                                                        console.log("d delete");
                                                    }
                                                        
                                                }
                                            }>Delete</Button>
                                    </td>
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