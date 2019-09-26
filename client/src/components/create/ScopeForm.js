import React from "react";
import NavButtons from "./NavButtons";
import { connect } from "react-redux";
import { addScope } from "../../redux/actions/reportActions";
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



class ScopeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scope: ''
        }
    }

    handleAdd = (e) => {
        e.preventDefault();
        if (this.state.scope.length > 0) {
            this.props.dispatch(addScope(this.state.scope));
            this.props.dispatch(incrementProgress());
        }
    }

    handleChange = (e) => {
        this.setState({
            scope: e.target.value
        });
    }

    render() {
        return (

            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Scope of Work</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <div className="form-group">
                                            {
                                                this.props.locked === true ?
                                                    (<textarea disabled value={this.props.scope} className="form-control" rows="5" id="comment"></textarea>)
                                                    : (<textarea onChange={this.handleChange} className="form-control" rows="5" id="comment"></textarea>)
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
        scope : state.report.scope
    });
}

export default connect(mapStateToProps)(ScopeForm);