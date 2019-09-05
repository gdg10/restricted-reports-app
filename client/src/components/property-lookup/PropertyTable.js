import React from "react";
import { connect } from "react-redux";

import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    Button
} from "shards-react";

class PropertyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'no lookups yet',
            results: ["107 Canal Crossing, Stewartsville, NJ, 08886"]
            // results: []
        }
    }

    render() {
        let tableHeader = '';
        let tableBody = '';
        if (this.state.results.length > 0) {
            tableHeader = (
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">#</th>
                        <th scope="col" className="border-0">Street Address</th>
                        <th scope="col" className="border-0">City, State, ZIP</th>
                        <th scope="col" className="border-0">GLA</th>
                        <th scope="col" className="border-0">Last Sold</th>
                        <th scope="col" className="border-0">Last Price</th>
                        <th scope="col" className="border-0">Bed / Bath</th>
                    </tr>
                </thead>
            );

            tableBody = (
                <tbody>
                <tr>
                    <td>1</td>
                    <td>285 Park Ridge Ave</td>
                    <td>Easton, PA, 18040</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            );
        }

        return (
            <Row>
                <Col>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            
                            <table className="table m-0">
                                {tableHeader}
                                {tableBody}
                            </table>
                        </ListGroupItem>

                        <ListGroupItem className="p-3">
                            <h7>{this.state.message}</h7>
                        </ListGroupItem>

                    </ListGroup>
                </Col>
            </Row>
        );
    }
}

export default connect()(PropertyTable);