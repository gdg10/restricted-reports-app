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

class PropertyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curAddress: '',
            curCity : '',
            // curAddressValid: null,
            curAddress2: '',
            // curAddress2Valid: null,
            curState: '',
            // curStateValid: null,
            curZip: '',
            // curZipValid: null
        }
    }

    handleCurAddress = (e) => {
        this.setState({
            curAddress : e.target.value
        });
    }

    handleCurAddress2 = (e) => {
        this.setState({
            curAddress2 : e.target.value
        });
    }

    handleCurCity = (e) => {
        this.setState({
            curCity : e.target.value
        })
    }

    handleCurState = (e) => {
        this.setState({
            curState : e.target.value
        });
    }

    handleCurZip = (e) => {
        this.setState({
            curZip : e.target.value
        });
    }

    handleSubmit = (e) => {
        let incomplete = (
            this.state.curAddress.length <= 0 ||
            this.state.curCity.length <= 0 ||
            this.state.curState.length <= 0 ||
            this.state.curZip.length <= 0);

        if(incomplete){
            
        }else{
            alert();
        }
        
    }

    render() {
        return (
            <Row>
                <Col>
                    <Form>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Row form>
                                    <Col md="9">
                                        <FormGroup>
                                            <label htmlFor="feInputAddress">Address</label>
                                            <FormInput onChange={this.handleCurAddress} id="feInputAddress" required />
                                        </FormGroup>
                                    </Col>
                                    <Col md="3">
                                    <FormGroup>
                                        <label htmlFor="feInputAddress2">Address 2</label>
                                        <FormInput
                                            onChange={this.handleCurAddress2} id="feInputAddress2"
                                        />
                                    </FormGroup>
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                        <label htmlFor="feInputCity">City</label>
                                        <FormInput onChange={this.handleCurCity} id="feInputCity" required />
                                    </Col>
                                    <Col md="3" className="form-group">
                                        <label htmlFor="feInputState">State</label>
                                        <FormSelect onChange={this.handleCurState} id="feInputState" required>
                                            {/* <option>Choose...</option> */}
                                            <option>Select...</option>
                                            <option>PA</option>
                                            <option>NJ</option>
                                        </FormSelect>
                                    </Col>
                                    <Col md="3" className="form-group">
                                        <label htmlFor="feInputZip">ZIP</label>
                                        <FormInput onChange={this.handleCurZip} id="feInputZip" required />
                                    </Col>
                                    <Col>
                                        <Button onClick={this.handleSubmit}>Lookup</Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default connect()(PropertyForm);