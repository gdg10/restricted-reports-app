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

import { nextPrompt } from "../../redux/actions";

class CompForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comps : {},
            curAddress : '',
            curAddressValid : null,
            curAddress2 : '',
            curAddress2Valid : null,
            curState : '',
            curStateValid : null,
            curZip : '',
            curZipValid : null,
            curMLS : '',
            curMLSValid : null
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
            <Row>
                <Col>
                    <Form>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <FormGroup>
                                    <label htmlFor="feInputAddress">Address</label>
                                    <FormInput id="feInputAddress" required />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="feInputAddress2">Address 2</label>
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
                                        <label htmlFor="feInputZip">ZIP</label>
                                        <FormInput id="feInputZip" required />
                                    </Col>

                                    <Col md="12" className="form-group">
                                        <label htmlFor="feMLSNumber">MLS Number (Optional)</label>
                                        <FormInput id="feMLSNumber"
                                        />
                                    </Col>
                                </Row>
                                <Button type="submit">Add Comparable</Button>
                            </ListGroupItem>
                            <ListGroupItem className="p-3">
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
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>285 Park Ridge Ave</td>
                                            <td>Easton</td>
                                            <td>PA</td>
                                            <td>18040</td>
                                            <td>107-0339</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>3</td>
                                            <td>285 Park Ridge Ave</td>
                                            <td>Easton</td>
                                            <td>PA</td>
                                            <td>18040</td>
                                            <td>107-0339</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>4</td>
                                            <td>285 Park Ridge Ave</td>
                                            <td>Easton</td>
                                            <td>PA</td>
                                            <td>18040</td>
                                            <td>107-0339</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                        </ListGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default CompForm;