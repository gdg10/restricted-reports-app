import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addValue } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    // FormInput,
    // FormGroup,
    // FormCheckbox,
    // FormSelect,
    FormFeedback,
    Button
} from "shards-react";



class ValueForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minVal: '',
            maxVal: '',
            rec: ''
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.minVal != ''
            && this.state.maxVal != ''
            && this.state.rec != '') {
            this.props.dispatch(
                addValue(
                    {
                        minVal : this.state.minVal,
                        maxVal : this.state.maxVal,
                        rec : this.state.rec
                    }
                )
            );
            this.props.dispatch(incrementProgress());
        }
    }

    handleChangeMin = (e) => {
        this.setState({
            minVal: e.target.value
        });
    }

    handleChangeMax = (e) => {
        this.setState({
            maxVal: e.target.value
        });
    }

    handleChangeRec = (e) => {
        this.setState({
            rec: e.target.value
        });
    }

    render() {
        return (

            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Value Range & Reconciliation</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label for="crt">Minimum Price</label>
                                                <input type="number" onChange={this.handleChangeMin} className="form-control" id="crt"></input>
                                            </div>
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label for="usr">Maximum Price</label>
                                                <input type="number" onChange={this.handleChangeMax} className="form-control" id="usr"></input>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <div className="form-group">
                                                <label for="comment">Reconciliation</label>
                                                <textarea onChange={this.handleChangeRec} className="form-control" rows="5" id="comment"></textarea>
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

const mapStateToProps = (state) => {
    return ({
        minVal: state.report.minVal,
        maxVal: state.report.maxVal,
        rec: state.report.rec
    })
}

export default connect(mapStateToProps)(ValueForm);