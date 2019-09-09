import React, { Component } from "react";
import { connect } from "react-redux"
import { makeActiveReport } from "../../redux/actions/activeReportActions";

import {
    ListGroupItem,
    Button,
} from "shards-react";

class ProgressButtons extends Component {

    constructor(props) {
        super(props);
    }

    handlePublish = () => {
        fetch('/api/getPDF')
            .then(res => res.json())
            .then(res => res.replace(/\\/g, ""))
            .then(res => JSON.parse(res))
            .then(res => this.props.dispatch(makeActiveReport(res.response)))
    }

    handleSave = () => {
        // TODO
    }

    render() {

        // SHOULD BUTTONS BE DISABLED? a function of progress
        var saveDisabled = this.props.progress <= 0;
        var publishDisabled = false;
        // var publishDisabled = this.props.progress !== 100; //logic disabled for testing

        return (
            <ListGroupItem className="d-flex px-3">

                {/* SAVE BUTTON */}
                {saveDisabled === true ?
                    (<Button outline disabled theme="accent" size="sm"><i className="material-icons">save</i> Save Draft </Button>)
                    : (<Button outline theme="accent" size="sm"><i className="material-icons">save</i> Save Draft</Button>)
                }

                {/* PUBLISH BUTTON */}
                {publishDisabled === true ?
                    (<Button disabled theme="accent" size="sm" className="ml-auto"><i className="material-icons">file_copy</i> Publish</Button>)
                    : (<Button onClick={this.handlePublish} theme="accent" size="sm" className="ml-auto"><i className="material-icons">file_copy</i> Publish </Button>)
                }

            </ListGroupItem>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        progress: state.wizard.progress
    });
}

export default connect(mapStateToProps)(ProgressButtons);