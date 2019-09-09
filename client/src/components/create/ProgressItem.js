import React, { Component } from "react";
import { connect }  from "react-redux"

class ProgressItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="d-flex mb-2">
                
                {/* NAME OF ICON */}
                <i className="material-icons mr-1">{this.props.iconName}</i>
                
                {/* NAME OF REPORT PROMPT */}
                <strong className="mr-1">{this.props.promptName}</strong>

                {/* IS IT COMPLETED? Format conditionally */}
                <strong className={this.props.completed ? "text-success" : "text-warning"}>
                    {this.props.completed ? "Complete" : "Incomplete"}
                </strong>
                
                {/* EDIT BUTTON */}
                <a className="ml-auto" href="#">Edit</a>

            </span>
        );
    }


}

export default connect()(ProgressItem);