import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateAddress1, updateAddress2, updateAddress3} from '../../ducks/reducer';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e)=>this.props.updateAddLine1(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e)=>this.props.updateAddLine2(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e)=>this.props.updateAddLine3(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {addressOne, addressTwo, addressThree} = state;
    return{
        addressOne,
        addressTwo,
        addressThree
    }
}
export default connect(mapStateToProps,{updateAddress1, updateAddress2, updateAddress3})(WizardNine);