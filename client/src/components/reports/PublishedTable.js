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
        if (this.props.allReports.length > 0) {
            return (
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Published</h6>
                        {/* <h6 className="m-0">Published({this.props.comps.length})</h6> */}
                    </CardHeader>
                    <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">#</th>
                                <th scope="col" className="border-0"> Address</th>
                                <th scope="col" className="border-0"> Address 2</th>
                                <th scope="col" className="border-0">City</th>
                                <th scope="col" className="border-0">State</th>
                                <th scope="col" className="border-0">ZIP</th>
                                <th scope="col" className="border-0">MLS Number</th>
                                <th scope="col" className="border-0">Remove</th>
                                <th scope="col" className="border-0">View</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            { this.props.comps.map( (n, index) => <PublishedTableRow comp={n} number={index} key={index}/>) }
                        </tbody> */}
                    </table>
                </Card>);
        } else {
            return "No reports to show right now. Publish a report in the 'Create' tab to view it here.";
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        allReports: state.allReports
    });
}

export default connect(mapStateToProps)(PublishedTable);