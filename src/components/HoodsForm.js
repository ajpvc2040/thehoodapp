import React, { Component } from 'react'
import HoodsTable from './HoodsTable';

class HoodsForm extends Component {

    render(){
        return (
            <div>
                <h1>Hoods</h1>
                <HoodsTable></HoodsTable>
            </div>
        );
    }

}

export default HoodsForm;