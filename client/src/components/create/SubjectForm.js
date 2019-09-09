import React from "react";
import { connect } from "react-redux";
import { addSubject } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import NavButtons from "./NavButtons";

import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Card,
    CardHeader,
    Form,
    FormInput,
    FormGroup,
    FormSelect,
    Button,
    FormFeedback
} from "shards-react";

class SubjectForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curAddress: '',
            curAddress2: '',
            curState: '',
            curZip: '',
            curMLS: ''
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
            // TODO: Error message 
        } else {
            this.props.dispatch(incrementProgress());
            this.props.dispatch(addSubject({
                address: this.state.curAddress,
                address2: this.state.curAddress2,
                city: this.state.curCity,
                state: this.state.curState,
                zip: this.state.curZip,
                mls: this.state.curMLS
            }));
        }
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Subject</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                            {/* <Col md="12"><h7 className=""><i>Add the name of the person, business or institution to which the completed report is to be delivered.</i></h7></Col> */}
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        {
                                            this.props.locked === true ? (
                                                <React.Fragment>
                                                    {/* // Address */}
                                                    <Col md="6" className="form-group">
                                                        <FormGroup>
                                                            <label htmlFor="feInputAddress">Subject Address</label>
                                                            <FormInput disabled valid value={this.props.address} id="feInputAddress" required />
                                                        </FormGroup>
                                                    </Col>

                                                    {/* // Address2 */}
                                                    <Col md="6" className="form-group">
                                                        <FormGroup>
                                                            <label htmlFor="feInputAddress2">Subject Address 2</label>
                                                            <FormInput disabled valid value={this.props.address2} id="feInputAddress2" />
                                                        </FormGroup>
                                                    </Col>

                                                    {/* // CITY */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feInputCity">City</label>
                                                        <FormInput disabled valid value={this.props.city} id="feInputCity" required />
                                                    </Col>

                                                    {/* // STATE */}
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="feInputState">State</label>
                                                        <FormSelect disabled valid value={this.props.state} id="feInputState" required>
                                                            <option>Choose...</option>
                                                            <option>PA</option>
                                                            <option>NJ</option>
                                                        </FormSelect>
                                                    </Col>

                                                    {/* // ZIP */}
                                                    <Col md="2" className="form-group">
                                                        <label htmlFor="feInputZip">Zip</label>
                                                        <FormInput disabled valid value={this.props.zip} id="feInputZip" required />
                                                    </Col>

                                                    {/* // MLS */}
                                                    <Col md="12" className="form-group">
                                                        <label htmlFor="feMLSNumber">MLS Number</label>
                                                        <FormInput disabled valid value={this.props.mls} placeholder="optional" id="feMLSNumber" />
                                                        <FormFeedback valid>A valid subject has been added.</FormFeedback>
                                                    </Col></React.Fragment>)
                                                : (<React.Fragment>

                                                    <Col md="6" className="form-group">
                                                        {/* // Address */}
                                                        <FormGroup>
                                                            <label htmlFor="feInputAddress">Subject Address</label>
                                                            <FormInput onChange={this.handleCurAddress} id="feInputAddress" required />
                                                        </FormGroup>
                                                    </Col>

                                                    <Col md="6" className="form-group">
                                                        {/* // Address2 */}
                                                        <FormGroup>
                                                            <label htmlFor="feInputAddress2">Subject Address 2</label>
                                                            <FormInput onChange={this.handleCurAddress2} id="feInputAddress2" />
                                                        </FormGroup>
                                                    </Col>

                                                    {/* // City */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feInputCity">City</label>
                                                        <FormInput onChange={this.handleCurCity} id="feInputCity" required />
                                                    </Col>

                                                    {/* // STATE */}
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="feInputState">State</label>
                                                        <FormSelect onChange={this.handleCurState} id="feInputState" required>
                                                            <option>Choose...</option>
                                                            <option>PA</option>
                                                            <option>NJ</option>
                                                        </FormSelect>
                                                    </Col>

                                                    {/* // ZIP */}
                                                    <Col md="2" className="form-group">
                                                        <label htmlFor="feInputZip">Zip</label>
                                                        <FormInput onChange={this.handleCurZip} id="feInputZip" required />
                                                    </Col>

                                                    {/* // MLS */}
                                                    <Col md="12" className="form-group">
                                                        <label htmlFor="feMLSNumber">MLS Number</label>
                                                        <FormInput onChange={this.handleCurMLS} placeholder="optional" id="feMLSNumber" />
                                                    </Col>
                                                </React.Fragment>)
                                        }
                                    </Row>

                                    {/* BUTTONS */}
                                    <Row>
                                        <Col>
                                            {
                                                this.props.locked === true ?
                                                    (<Button size="sm" disabled theme="success" onClick={this.handleSubmit}>Add</Button>)
                                                    : (<Button size="sm" theme="success" onClick={this.handleSubmit}>Add</Button>)
                                            }
                                        </Col>
                                        <Col>
                                            <NavButtons />
                                        </Col>
                                    </Row>

                                </ListGroupItem>
                            </ListGroup>
                        </Form>
                    </Col>
                </Row>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        address: state.report.subject.address,
        address2: state.report.subject.address2,
        city: state.report.subject.city,
        state: state.report.subject.state,
        zip: state.report.subject.zip
    });
}

export default connect(mapStateToProps)(SubjectForm);