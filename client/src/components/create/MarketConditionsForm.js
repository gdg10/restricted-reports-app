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



class MarketConditionsForm extends React.Component {

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
                    <h6 className="m-0">Add Market Conditions</h6>
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
                                                    (<textarea disabled valid value={this.props.market} className="form-control" rows="5" id="comment"></textarea>)
                                                    : (<textarea onChange={this.handleChange} className="form-control" rows="5" id="comment"></textarea>)
                                            }
                                            <FormFeedback valid>Valid Market Conditions have been added.</FormFeedback>
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
        market : state.report.market
    });
}

export default connect(mapStateToProps)(MarketConditionsForm);