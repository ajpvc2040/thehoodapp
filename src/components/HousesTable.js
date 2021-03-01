import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import HousesNew from './HousesNew'
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
  })

class HousesTable extends Component{

    state = {
        houses : []
      }
      
    constructor(props){
        super(props);
        this.refreshData();
    }

    refreshData(){
        console.log(this.props.hood)
        api.get('houses/',{
            params : {
                hoodId : this.props.hood.hoodId
            }
        }).then(res =>{
            res.data.sort((a, b) => a.houseId - b.houseId);
            this.setState({houses : res.data},()=>console.log("force update"))
        });
    }

    deleteData(houseParm){
        console.log("a del");
        console.log(houseParm)
        try{

            api.delete('deleteHouse/', {data:houseParm}).then(res =>{
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
                            <th>Number</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.houses.map(house => 
                                <tr key={house.houseId}>
                                    <td>{house.houseId}</td>
                                    <td>{house.houseCode}</td>
                                    <td>{house.balance}</td>
                                    <td>
                                        <Button variant="danger" 
                                            onClick=
                                            {() => 
                                                { 
                                                    if (window.confirm('Are you sure you wish to delete this item?')){
                                                        console.log("a delete");
                                                        this.deleteData(house);
                                                        console.log("d delete");
                                                    }
                                                        
                                                }
                                            }>Delete</Button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                <HousesNew hood={this.props.hood} updateTable={()=>this.refreshData()}></HousesNew>
            </div>
        );
    }

}

export default HousesTable;