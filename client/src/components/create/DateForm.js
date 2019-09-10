import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addDate } from "../../redux/actions/reportActions";
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
    // FormGroup,
    // FormCheckbox,
    // FormSelect,
    FormFeedback,
    Button
} from "shards-react";



class DateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createDate: '',
            effectiveDate: ''
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.createDate != '' && this.state.effectiveDate != '') {
            this.props.dispatch(
                addDate({
                    createDate: this.state.createDate,
                    effectiveDate: this.state.effectiveDate
                }));
            this.props.dispatch(incrementProgress());
        }
    }

    handleCreateChange = (e) => {
        this.setState({
            createDate: e.target.value
        });
    }

    handleEffectiveChange = (e) => {
        this.setState({
            effectiveDate: e.target.value
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
                                                {this.props.locked ?
                                                    (<FormInput valid disabled value={this.props.createDate} type="date" className="form-control" id="crt"></FormInput>)
                                                    : (<FormInput onChange={this.handleCreateChange} type="date" className="form-control" id="crt"></FormInput>)}

                                            </div>
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <div className="form-group">
                                                <label for="usr">Effective Date</label>
                                                {this.props.locked ?
                                                    (<FormInput valid disabled value={this.props.effectiveDate} type="date" className="form-control" id="usr"></FormInput>)
                                                    : (<FormInput onChange={this.handleEffectiveChange} type="date" className="form-control" id="usr"></FormInput>)}
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
        effectiveDate: state.report.effectiveDate,
        createDate: state.report.createDate
    })
}

export default connect(mapStateToProps)(DateForm);