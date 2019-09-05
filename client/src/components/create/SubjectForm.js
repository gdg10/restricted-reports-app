import React from "react";
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

const SubjectForm = () => (
    <Row>
        <Col>
            <Form>
                <ListGroup flush>
                    <ListGroupItem className="p-3">

                        <FormGroup>
                            <label htmlFor="feInputAddress">Subject Address</label>
                            <FormInput id="feInputAddress" required/>
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
                                <FormInput id="feInputCity" required/>
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
                                <FormInput id="feInputZip" required/>
                            </Col>

                            <Col md="12" className="form-group">
                                <label htmlFor="feMLSNumber">MLS Number (Optional)</label>
                                <FormInput id="feMLSNumber"
                                />
                            </Col>

                            {/* <Col md="12" className="form-group">
                                <FormCheckbox defaultChecked required>
                                    I agree with your <a href="#">Terms of Use</a>.
                                </FormCheckbox>
                            </Col> */}
                        </Row>
                        <Button type="submit">Add</Button>
                    </ListGroupItem>
                </ListGroup>
            </Form>
        </Col>
    </Row>
);

export default SubjectForm;