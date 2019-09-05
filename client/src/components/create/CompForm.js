import React from "react";
import { connect } from "react-redux";
import { nextPrompt } from "../../redux/actions";
import { lastPrompt } from "../../redux/actions";

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
import NavButtons from "./NavButtons";

class CompForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comps: {},
            curAddress: '',
            curAddressValid: null,
            curAddress2: '',
            curAddress2Valid: null,
            curState: '',
            curStateValid: null,
            curZip: '',
            curZipValid: null,
            curMLS: '',
            curMLSValid: null
        }
    }

    handleCurAddress = (e) => {

    }

    handleCurAddress2 = (e) => {

    }

    handleCurState = (e) => {

    }

    handleCurZip = (e) => {

    }

    handleCurMLS = (e) => {

    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <React.Fragment>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Add Comparable</h6>
                    </CardHeader>
                    <Row>
                        <Col>
                            <Form>
                                <ListGroup flush>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col md='6'>
                                                <FormGroup className="">
                                                    <label htmlFor="feInputAddress">Address</label>
                                                    <FormInput id="feInputAddress" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md='6'>
                                                <FormGroup className="">
                                                    <label htmlFor="feInputAddress2">Address Line 2</label>
                                                    <FormInput id="feInputAddress2"/>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputCity">City</label>
                                                <FormInput id="feInputCity" required />
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputState">State</label>
                                                <FormSelect id="feInputState" required>
                                                    <option>Select...</option>
                                                    <option>PA</option>
                                                    <option>NJ</option>
                                                </FormSelect>
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputZip">ZIP</label>
                                                <FormInput id="feInputZip" required />
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feMLSNumber">MLS#</label>
                                                <FormInput id="feMLSNumber" placeholder="optional"/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><Button theme="success" type="submit">Add Comparable</Button></Col>
                                            <Col><NavButtons /></Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                            </Form>
                        </Col>
                    </Row>
                </Card>

                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Added</h6>
                    </CardHeader>
                    <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">
                                    #
                                    </th>
                                <th scope="col" className="border-0">
                                    Address
                                    </th>
                                <th scope="col" className="border-0">
                                    City
                                    </th>
                                <th scope="col" className="border-0">
                                    State
                                    </th>
                                <th scope="col" className="border-0">
                                    ZIP
                                    </th>
                                <th scope="col" className="border-0">
                                    MLS Number
                                    </th>
                                <th scope="col" className="border-0">
                                    Remove
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>285 Park Ridge Ave</td>
                                <td>Easton</td>
                                <td>PA</td>
                                <td>18040</td>
                                <td>107-0339</td>
                                <td><Button outline theme="danger" small>remove</Button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>285 Park Ridge Ave</td>
                                <td>Easton</td>
                                <td>PA</td>
                                <td>18040</td>
                                <td>107-0339</td>
                                <td><Button outline theme="danger" small>remove</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </React.Fragment>
        )
    }
}

export default connect()(CompForm);