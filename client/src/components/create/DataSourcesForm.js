import React from "react";
import { connect } from "react-redux";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    FormCheckbox,
    Button
} from "shards-react";
import NavButtons from "./NavButtons";

class DataSourcesForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sources: ''
        }
    }

    handleAdd = (e) => {
        // e.preventDefault();
        let isValid = false;
        if (this.state.sources.length > 0) {
            isValid = true;
        }

        this.setState({
            valid: isValid
        });
    }

    handleChange = (e) => {
        this.setState({
            sources: e.target.value
        });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Add Data Sources</h6>
                </CardHeader>
                < Row >
                    <Col>
                        <Form>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row form>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange}>MLS</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange}>Inspection</FormCheckbox>
                                            </fieldset>
                                        </Col>

                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange}>Appraiser</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange}>Public Records</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange}>Home Owner</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange}>Other</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col><Button theme="success" onClick={this.handleAdd}>Add</Button></Col>
                                        <Col><NavButtons /></Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Form>
                    </Col>
                </Row >
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        sources : state.report.sources
    })
}
export default connect(mapStateToProps)(DataSourcesForm);