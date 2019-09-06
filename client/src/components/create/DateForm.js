import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addMarket } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    FormFeedback,
    Button
} from "shards-react";



class DateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            market: ''
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.market.length > 0) {
            this.props.dispatch(addMarket(this.state.market));
            this.props.dispatch(incrementProgress());
        }
    }

    handleChange = (e) => {
        this.setState({
            market: e.target.value
        });
    }

    render() {
        return (

            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Date</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label for="crt">Create Date</label>
                                                <input type="date" className="form-control" id="crt"></input>
                                            </div>
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label for="usr">Effective Date</label>
                                                <input type="date" className="form-control" id="usr"></input>
                                            </div>
                                        </Col>
                                    </Row>

                                    {/* BUTTONS */}
                                    <Row>
                                        <Col><Button theme="success" onClick={this.handleAdd}>Add</Button></Col>
                                        <Col><NavButtons /></Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Form>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default connect()(DateForm);