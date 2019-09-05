import React from "react";
import { connect } from "react-redux";
import { nextPrompt } from "../../redux/actions";
import { lastPrompt } from "../../redux/actions";


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

const SubjectForm = (props) => (

    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Add Subject</h6>
        </CardHeader>

        <Row>
            <Col>
                <Form>
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <FormGroup>
                                <label htmlFor="feInputAddress">Subject Address</label>
                                <FormInput id="feInputAddress" required />
                            </FormGroup>

                            <FormGroup>
                                <label htmlFor="feInputAddress2">Subject Address 2</label>
                                <FormInput
                                    id="feInputAddress2"
                                />
                            </FormGroup>

                            <Row form>
                                <Col md="6" className="form-group">
                                    <label htmlFor="feInputCity">City</label>
                                    <FormInput id="feInputCity" required />
                                </Col>
                                <Col md="4" className="form-group">
                                    <label htmlFor="feInputState">State</label>
                                    <FormSelect id="feInputState" required>
                                        {/* <option>Choose...</option> */}
                                        <option>PA</option>
                                        <option>NJ</option>
                                    </FormSelect>
                                </Col>
                                <Col md="2" className="form-group">
                                    <label htmlFor="feInputZip">Zip</label>
                                    <FormInput id="feInputZip" required />
                                </Col>

                                <Col md="12" className="form-group">
                                    <label htmlFor="feMLSNumber">MLS Number (Optional)</label>
                                    <FormInput id="feMLSNumber"
                                    />
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col><Button theme="success" type="submit">Add</Button></Col>
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

const mapStateToProps = (state) => {
    return ({
        name: state.report.client
    });
}

export default connect()(SubjectForm);
