import React from "react";
import { connect } from "react-redux";
import { addSubject } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";


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
    FormCheckbox,
    FormSelect,
    Button,
    ButtonGroup
} from "shards-react";
import NavButtons from "./NavButtons";

class SubjectForm extends React.Component {

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
            this.props.dispatch(incrementProgress());
            this.props.dispatch(addSubject({
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
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Subject</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">

                                    {/* Address */}
                                    <FormGroup>
                                        <label htmlFor="feInputAddress">Subject Address</label>
                                        <FormInput onChange={this.handleCurAddress} id="feInputAddress" required />
                                    </FormGroup>

                                    {/* Address2 */}
                                    <FormGroup>
                                        <label htmlFor="feInputAddress2">Subject Address 2</label>
                                        <FormInput onChange={this.handleCurAddress2} id="feInputAddress2"/>
                                    </FormGroup>

                                    <Row form>

                                        {/* CITY */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feInputCity">City</label>
                                            <FormInput onChange={this.handleCurCity} id="feInputCity" required />
                                        </Col>

                                        {/* STATE */}
                                        <Col md="4" className="form-group">
                                            <label htmlFor="feInputState">State</label>
                                            <FormSelect onChange={this.handleCurState} id="feInputState" required>
                                                <option>Choose...</option>
                                                <option>PA</option>
                                                <option>NJ</option>
                                            </FormSelect>
                                        </Col>

                                        {/* ZIP */}
                                        <Col md="2" className="form-group">
                                            <label htmlFor="feInputZip">Zip</label>
                                            <FormInput onChange={this.handleCurZip} id="feInputZip" required />
                                        </Col>

                                        {/* MLS */}
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feMLSNumber">MLS Number (Optional)</label>
                                            <FormInput onChange={this.handleCurMLS} id="feMLSNumber"
                                            />
                                        </Col>
                                    </Row>

                                    {/* BUTTONS */}
                                    <Row>
                                        <Col><Button theme="success" onClick={this.handleSubmit} type="submit">Add</Button></Col>
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
        sub: state.report.subject
    });
}

export default connect(mapStateToProps)(SubjectForm);
