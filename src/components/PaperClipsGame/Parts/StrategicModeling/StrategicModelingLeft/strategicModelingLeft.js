/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

/**
* Styles
*/

import './strategicModelingLeft.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../../reducers/selectors';

/**
* StrategicModelingLeft component definition and export
*/

export class StrategicModelingLeft extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {}
        
    }

    /**
    * Methods
    */

    renderList = () => {
        return(
            <div className="strategicModelingLeft">
                {this.props.showStrategicModelingCurrentList.map((el, i)=>{
                    return(
                        <div key={i} className={el.chosen ? "strategicModelingLeft-list-bold" : "strategicModelingLeft-list"}>
                            {i+1}. {el.strategy}: {el.val}
                        </div>
                    )})
                }
            </div>  
        )
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showStrategicModelingCurrentList: Selectors.getShowStrategicModelingCurrentListState(state),
            // showDropdownStrategicModeling: Selectors.getShowDropdownStrategicModelingState(state),
            // chosenListDropdown: Selectors.getChosenListDropdownState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleDropdownStrategicModeling: bindActionCreators(Actions.toggleDropdownStrategicModeling, dispatch),
        };
    }
)(StrategicModelingLeft);
