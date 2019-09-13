import React from "react";
import { connect } from "react-redux";
import PublishedTableRow from "./PublishedTableRow";

import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    FormCheckbox,
    Card,
    CardHeader,
    FormSelect,
    Button
} from "shards-react";

class PublishedTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.counter > 0) {
            return (
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Reports</h6>
                        {/* <h6 className="m-0">Published({this.props.comps.length})</h6> */}
                    </CardHeader>
                    <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">#</th>
                                <th scope="col" className="border-0">Address</th>
                                <th scope="col" className="border-0">Status</th>
                                <th scope="col" className="border-0">Completion</th>
                                <th scope="col" className="border-0">    </th>
                                <th scope="col" className="border-0">    </th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.allReports.map( (n, index) => <PublishedTableRow report={n} number={index} key={index}/>) }
                        </tbody>
                    </table>
                </Card>);
        } else if (this.props.counter === 0) {
            return "No reports to show right now. Publish a report in the 'Create' tab to view it here.";
        } else {
            return '';
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        allReports: state.allReports.reports,
        counter: state.allReports.reports.length,
        activeReport: state.activeReport.activeReport
    });
}

export default connect(mapStateToProps)(PublishedTable);