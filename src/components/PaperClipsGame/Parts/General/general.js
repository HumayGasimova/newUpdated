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

import Button from '../../../../library/Button/button';

/**
* Styles
*/

import './general.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Constants
*/

import * as projectsToAdd from '../../../../constants/projectsToAdd';

/**
* General component definition and export
*/

export class General extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
     * Methods
     */

    makePaperclip = () => {
        // this.props.makePaperclip();
        this.props.sellPaperclips()
     
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.paperClips !== this.props.paperClips){
    //         let weeks;
    //         let days;
    //         let hours
    //         let min;
    //         let sec;
    //         let comment;
    //         if(this.props.time >= 604800){
    //             weeks =  Math.floor(this.props.time/604800);
    //             days = Math.floor((this.props.time - weeks*604800)/86400);
    //             hours = Math.floor((this.props.time - weeks*604800 - days*86400)/3600);
    //             min = Math.floor((this.props.time - weeks*604800 - days*86400 - hours*3600)/60);
    //             sec = this.props.time - weeks*604800 - days*86400 - hours*3600 - min*60;
    //             comment = `clips created in ${weeks} ${weeks === 1 ? "week": "weeks"} ${days} ${days === 1 ? "day": "days"} ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
    //         }
    //         if(this.props.time < 604800){
    //             days = Math.floor(this.props.time/86400);
    //             hours = Math.floor((this.props.time - days*86400)/3600);
    //             min = Math.floor((this.props.time - days*86400 - hours*3600)/60);
    //             sec = this.props.time - days*86400 - hours*3600 - min*60;
    //             comment = `clips created in ${days} ${days === 1 ? "day": "days"} ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
    //         }
    //         if(this.props.time < 86400){
    //             hours = Math.floor(this.props.time/3600);
    //             min = Math.floor((this.props.time - hours*3600)/60);
    //             sec = this.props.time - hours*3600 - min*60;
    //             comment = `clips created in ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
    //         }
    //         if(this.props.time < 3600){
    //             min = Math.floor(this.props.time / 60);
    //             sec = this.props.time - min*60;
    //             comment = `clips created in ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
    //         }
    //         if(this.props.time < 60){
    //             sec = this.props.time;
    //             comment = `clips created in ${sec} ${sec === 1 ? "second": "seconds"}`;
    //         }
        
    //         if(this.props.paperClips === 100){
    //             this.props.sendCommentToTerminal(`100 ${comment}`);
    //         }
    //         if(this.props.paperClips === 300){
    //             this.props.sendCommentToTerminal(`300 ${comment}`);
    //         }
    //         if(this.props.paperClips === 500){
    //             this.props.sendCommentToTerminal(`500 ${comment}`);
    //         }
    //         if(this.props.paperClips === 1000){
    //             this.props.sendCommentToTerminal(`1,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 3000){
    //             this.props.sendCommentToTerminal(`3,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 5000){
    //             this.props.sendCommentToTerminal(`5,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 7000){
    //             this.props.sendCommentToTerminal(`7,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 10000){
    //             this.props.sendCommentToTerminal(`10,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 100000){
    //             this.props.sendCommentToTerminal(`100,000 ${comment}`);
    //         }
    //         if(this.props.paperClips === 4971 && this.props.completeGameIsThrown === false){
    //             this.props.addProject(projectsToAdd.CompleteGame);
    //             this.props.toggleThrownProject('completeGame', true);
    //         }
    //         if(this.props.countdown === 0){
    //             this.props.showEnding(false);
    //             this.props.lastComents()
    //             this.props.stopSendingLastComments();
    //         }
    //     }
    // }

    renderDots = () => {
        return(
            <div className="general-dots">
                {this.props.dots.map((el,i) => {
                    return(
                        <div className="general-dots-dot" key={i}/>
                    )
                })}
            </div>
        )
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="general">
                {this.props.isGameOver ? 
                <div className="general-ending">
                    <Button 
                        onClick={this.props.countdownOnClick}
                        text={"PRESS"}
                        disabled={this.props.countdown === 0}
                    />
                    {this.renderDots()}
                </div>
                     : 
                    <Button 
                        onClick={this.makePaperclip}
                        text={"Make Paperclip"}
                        disabled={this.props.makePaperclipDisabled}
                    />
                }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
            funds: Selectors.getFundsState(state),
            unsoldInventory: Selectors.getUnsoldInventoryState(state),
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            delay: Selectors.getDelayState(state),
            wire: Selectors.getWireState(state),
            makePaperclipDisabled: Selectors.getMakePaperclipDisabledState(state),
            time: Selectors.getTimeState(state),
            completeGameIsThrown: Selectors.getCompleteGameIsThrownState(state),
            isGameOver: Selectors.getIsGameOverState(state),
            countdown: Selectors.getCountdownState(state),
            dots: Selectors.getDotsState(state),
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            showEnding: bindActionCreators(Actions.showEnding, dispatch),
            lastComents: bindActionCreators(Actions.lastComents, dispatch),
            stopSendingLastComments: bindActionCreators(Actions.stopSendingLastComments, dispatch),
            toggleThrownProject: bindActionCreators(Actions.toggleThrownProject, dispatch),
            countdownOnClick: bindActionCreators(Actions.countdownOnClick, dispatch),
        };
    }
)(General);
