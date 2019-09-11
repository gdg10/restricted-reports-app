import React from "react";
import { connect } from "react-redux";
import { addComp } from "../../redux/actions/reportActions";
import NavButtons from "./NavButtons";
import CompFormTable from "./CompFormTable";

import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    FormGroup,
    Card,
    CardHeader,
    FormSelect,
    Button
} from "shards-react";

class CompForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curAddress: '',
            curAddress2: '',
            curState: '',
            curZip: '',
            curMLS: '',
            comparables: [],
            compCount: 0
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
            let valid = true;
            if(valid){
                //Dispatch the new comp to the store
                this.props.dispatch(addComp({
                    address: this.state.curAddress,
                    address2: this.state.curAddress2,
                    city: this.state.curCity,
                    state: this.state.curState,
                    zip: this.state.curZip,
                    mls: this.state.curMLS
                    }));

                //update the state of the component
                this.setState({
                    address: this.state.curAddress,
                    address2: this.state.curAddress2,
                    city: this.state.curCity,
                    state: this.state.curState,
                    zip: this.state.curZip,
                    mls: this.state.curMLS,
                    comparables: [{
                        address: this.state.curAddress,
                        address2: this.state.curAddress2,
                        city: this.state.curCity,
                        state: this.state.curState,
                        zip: this.state.curZip,
                        mls: this.state.curMLS
                    }].concat(this.state.comparables)
                });
            }else{
                //show user that comp search was not successful
            }
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
                                                    {this.props.locked ? ( <FormInput disabled valid id="feInputAddress" required />):( <FormInput onChange={this.handleCurAddress} id="feInputAddress" required />)}
                                                </FormGroup>
                                            </Col>
                                            <Col md='6'>
                                                <FormGroup className="">
                                                    <label htmlFor="feInputAddress2">Address Line 2</label>
                                                    {this.props.locked ? (<FormInput disabled valid id="feInputAddress2" />) : (<FormInput onChange={this.handleCurAddress2} id="feInputAddress2" />) }
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row form>
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feInputCity">City</label>
                                                {this.props.locked ? (<FormInput disabled valid id="feInputCity" required />) : (<FormInput onChange={this.handleCurCity} id="feInputCity" required />)}
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputState">State</label>
                                                {this.props.locked ? (                                                
                                                <FormSelect disabled valid id="feInputState" required>
                                                    <option>Select...</option>
                                                    <option>PA</option>
                                                    <option>NJ</option>
                                                </FormSelect>) : (                                                
                                                <FormSelect id="feInputState" onChange={this.handleCurState} required>
                                                    <option>Select...</option>
                                                    <option>PA</option>
                                                    <option>NJ</option>
                                                </FormSelect>)}
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feInputZip">ZIP</label>
                                                {this.props.locked ? (<FormInput valid disabled id="feInputZip" required />):(<FormInput onChange={this.handleCurZip} id="feInputZip" required />)}
                                            </Col>
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feMLSNumber">MLS#</label>
                                                {this.props.locked ? (<FormInput valid disabled id="feMLSNumber" placeholder="optional" />) : (<FormInput onChange={this.handleCurMLS} id="feMLSNumber" placeholder="optional" />)}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            {this.props.locked ? ( <Button theme="success" disabled type="submit">Add Comparable</Button>):( <Button theme="success" onClick={this.handleSubmit} type="submit">Add Comparable</Button>)}
                                            </Col>
                                            <Col><NavButtons /></Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                            </Form>
                        </Col>
                    </Row>
                </Card>
                <CompFormTable />
            </React.Fragment>
        )
    }
}

export default connect()(CompForm);