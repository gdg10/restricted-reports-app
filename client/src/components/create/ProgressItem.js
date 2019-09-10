import React, { Component } from "react";
import { connect }  from "react-redux"
import { jumpToPrompt } from "../../redux/actions/promptActions";

class ProgressItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="d-flex mb-2">
                
                {/* NAME OF ICON */}
                <a href="#" onClick={()=>{this.props.dispatch(jumpToPrompt(this.props.promptIndex))}}>
                <i className="material-icons mr-1">{this.props.iconName}</i></a>
                
                {/* NAME OF REPORT PROMPT */}
                <strong className="mr-1">{this.props.promptName}: </strong>

                {/* IS IT COMPLETED? Format conditionally */}
                <strong className={this.props.completed ? "text-success" : "text-warning"}>
                    {this.props.completed ? "Complete" : "Incomplete"}
                </strong>
                
                {/* EDIT BUTTON. Show only when completed */}
                <a className="ml-auto" href="#" onClick={()=>{this.props.dispatch(jumpToPrompt(this.props.promptIndex))}}>{this.props.completed ? "Edit" : ''}</a>
                
            </span>
        );
    }


}

export default connect()(ProgressItem);