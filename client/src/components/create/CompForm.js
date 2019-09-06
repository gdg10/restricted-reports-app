import React from "react";
import { connect } from "react-redux";
import { addComp } from "../../redux/actions/reportActions";

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
import CompFormRow from "./CompFormRow";

class CompForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.setState({
            curAddress: e.target.value
        });
    }

    handleCurAddress2 = (e) => {
        this.setState({
            curAddress2: e.target.value
        });
    }

    handleCurCity = (e) => {
        this.setState({
            curCity: e.target.value
        })
    }

    handleCurState = (e) => {
        this.setState({
            curState: e.target.value
        });
    }

    handleCurZip = (e) => {
        this.setState({
            curZip: e.target.value
        });
    }

    handleCurMLS = (e) => {
        this.setState({
            curMLS: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let incomplete = (
            this.state.curAddress.length <= 0 ||
            this.state.curCity.length <= 0 ||
            this.state.curState.length <= 0 ||
            this.state.curZip.length <= 0);

        if (incomplete) {

        } else {
            this.props.dispatch(addComp({
                adddress: this.state.curAddress,
                addresss2: this.state.curAddress2,
                city: this.state.curCity,
                state: this.state.curState,
                zip: this.state.curZip,
                mls: this.state.curMLS
            }));
        }

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
                                                    <FormInput onChange={this.handleCurAddress} id="feInputAddress" required />
                                                </FormGroup>
                                            </Col>
                                            <Col md='6'>
                                                <FormGroup className="">
                                                    <label htmlFor="feInputAddress2">Address Line 2</label>
                                                    <FormInput onChange={this.handleCurAddress2} id="feInputAddress2" />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputCity">City</label>
                                                <FormInput onChange={this.handleCurCity} id="feInputCity" required />
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputState">State</label>
                                                <FormSelect id="feInputState" onChange={this.handleCurState} required>
                                                    <option>Select...</option>
                                                    <option>PA</option>
                                                    <option>NJ</option>
                                                </FormSelect>
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputZip">ZIP</label>
                                                <FormInput onChange={this.handleCurZip} id="feInputZip" required />
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feMLSNumber">MLS#</label>
                                                <FormInput onChange={this.handleCurMLS} id="feMLSNumber" placeholder="optional" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col><Button theme="success" onClick={this.handleSubmit} type="submit">Add Comparable</Button></Col>
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
                        <h6 className="m-0">Added ({this.props.comps.length})</h6>
                    </CardHeader>
                    <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">#</th>
                                <th scope="col" className="border-0"> Address</th>
                                <th scope="col" className="border-0">City</th>
                                <th scope="col" className="border-0">State</th>
                                <th scope="col" className="border-0">ZIP</th>
                                <th scope="col" className="border-0">MLS Number</th>
                                <th scope="col" className="border-0">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.props.comps.map((x,index)=> ('fuck'))} */}
                            {/* {<CompFormRow key={index} /> */}
                        </tbody>
                    </table>
                </Card>
            </React.Fragment>
                )
            }
        }
        
const mapStateToProps = (state) => {
    return ({
        comps : state.report.comparables
    }); 
}

export default connect(mapStateToProps)(CompForm);