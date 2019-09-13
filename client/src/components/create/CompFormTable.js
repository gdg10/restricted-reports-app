import React from "react";
import { connect } from 'react-redux';
import CompFormRow from './CompFormRow';
import {
    // ListGroup,
    // ListGroupItem,
    // Row,
    // Col,
    // Form,
    // FormInput,
    // FormGroup,
    // FormCheckbox,
    Card,
    CardHeader,
    // FormSelect,
    // Button
} from "shards-react";

class CompFormTable extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Added ({this.props.comparables.length}/4)</h6>
            </CardHeader>
            <table className="table mb-0">
                <thead className="bg-light">
                    <tr>
                        {/* <th scope="col" className="border-0">#</th> */}
                        <th scope="col" className="border-0">Address</th>
                        <th scope="col" className="border-0">City</th>
                        {/* <th scope="col" className="border-0">State</th> */}
                        {/* <th scope="col" className="border-0">ZIP</th> */}
                        <th scope="col" className="border-0">Last Sold</th>
                        <th scope="col" className="border-0">Price</th>
                        <th scope="col" className="border-0">Bed - Bath</th>
                        <th scope="col" className="border-0">GLA</th>
                        <th scope="col" className="border-0"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.comparables.map((n, index) => <CompFormRow comp={n} number={index} key={index} />)}
                    {/* {<CompFormRow key={index} /> */}
                </tbody>
            </table>
        </Card>);
    }
}

const mapStateToProps = (state) => {
    return ({
        comparables : state.report.comparables,
        count : state.report.comparables.length
    })
}

export default connect(mapStateToProps)(CompFormTable);