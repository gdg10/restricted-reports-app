import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addExposure } from "../../redux/actions/reportActions";
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
    FormFeedback,
    Button
} from "shards-react";



class ExposureTimeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eMin: '',
            eMax: ''
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.eMin !== '' && this.state.eMax !== '') {
            this.props.dispatch(addExposure({
                eMin: this.state.eMin,
                eMax: this.state.eMax
            }));
            this.props.dispatch(incrementProgress());
        }
    }

    handleMinChange = (e) => {
        this.setState({
            eMin: e.target.value
        });
    }

    handleMaxChange = (e) => {
        this.setState({
            eMax: e.target.value
        });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Reasonable Exposure Time</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>

                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="crt">Minimum Time on Market (days)</label>
                                                {
                                                    this.props.locked === true ?
                                                        (<FormInput disabled valid value={this.props.exposureMin} type="number" className="form-control" id="crt"></FormInput>)
                                                        : (<FormInput onChange={this.handleMinChange} type="number" className="form-control" id="crt"></FormInput>)
                                                }
                                                <FormFeedback valid>A valid exposure time has been added.</FormFeedback>
                                            </div>
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="usr">Maximum Time on Market (days)</label>
                                                {
                                                    this.props.locked === true ?
                                                        (<FormInput disabled valid value={this.props.exposureMax} type="number" className="form-control" id="crt"></FormInput>)
                                                        : (<FormInput onChange={this.handleMaxChange} type="number" className="form-control" id="crt"></FormInput>)
                                                }
                                            </div>
                                        </Col>

                                    </Row>

                                    {/* BUTTONS */}
                                    <Row>
                                        <Col>
                                            {
                                                this.props.locked === true ?
                                                    (<Button size="sm" disabled theme="success" onClick={this.handleAdd}>Add</Button>)
                                                    : (<Button size="sm" theme="success" onClick={this.handleAdd}>Add</Button>)
                                            }
                                        </Col>
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
        exposureMin: state.report.exposureTimeMin,
        exposureMax: state.report.exposureTimeMax
    })
}

export default connect(mapStateToProps)(ExposureTimeForm);