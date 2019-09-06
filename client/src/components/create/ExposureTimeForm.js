import React from "react";
import { connect } from "react-redux";
import { addClient } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import NavButtons from "./NavButtons";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Card,
    CardHeader,
    Button,
    FormFeedback
} from "shards-react";

class ExposureTimeForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            passwords: ["sdf"]
        }
    }

    // Fetch passwords after first mount
    componentDidMount() {
        this.getPasswords();
    }

    getPasswords = () => {
        // Get the passwords and store them in state
        fetch('/api/passwords')
            .then(res => res.json())
            .then(passwords => this.setState({ passwords: passwords }));
    }


    handleAdd = (e) => {
        let isValid = false;
        if (this.state.name.length > 0) {
            isValid = true;
            this.props.dispatch(addClient(this.state.name));
            this.props.dispatch(incrementProgress());
        }

        this.setState({
            valid: isValid
        });
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Client</h6>
                </CardHeader>
                <Row>
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feClientName">Client</label>

                                            {this.props.name.length > 0 ?
                                                <FormInput
                                                    required
                                                    disabled
                                                    valid
                                                    id="feClientName"
                                                    value={this.props.name}
                                                    onChange={this.handleChange}
                                                />
                                                : <FormInput
                                                    required
                                                    id="feClientName"
                                                    onChange={this.handleChange}
                                                />}

                                            <FormFeedback valid>valid client</FormFeedback>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button size="sm" theme="success" onClick={this.handleAdd}>Add</Button>
                                        </Col>
                                        <Col>
                                            <NavButtons />
                                        </Col>
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
        name: state.report.client
    });
}

export default connect(mapStateToProps)(ExposureTimeForm);