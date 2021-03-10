import React, { Component } from 'react'
import Select from 'react-select';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
  })

class HousesCombo extends Component{

    state = {
        houses : [],
        selectedHouse : {key : 0, id : 0, label : "All"}
    }

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.refreshData();
    }

    handleChange(obj){

        this.setState({
            ...this.state.houses,
            selectedHouse:obj
        }, ()=>console.log("force update 2"))

        this.props.handleHouseChange(obj.id);
    }

    refreshData(){
        api.get('houses/',{
            params : {
                hoodId : this.props.hood
            }
        }).then(res =>{
            res.data.sort((a, b) => a.houseId - b.houseId);
            const formattedData = [];
            formattedData.push({key:0,id:0,label:"All"})
            res.data.forEach(element => {
                formattedData.push({
                    key : element.houseId, 
                    id : element.houseId,
                    label: element.houseCode
                });
            });
            console.log(formattedData)
            this.setState({houses : formattedData, ...this.state.selectedHouse}, ()=>console.log("force update"))
        });
    }

    render(){
        return (
            <Select 
                id="housesCombo"
                options = {this.state.houses}
                value = {this.state.selectedHouse}
                onChange = {obj=>this.handleChange(obj)}
            />
        );
    }

}

export default HousesCombo;