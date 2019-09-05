import React from "react";
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
            valid: false,
            name: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
    }


    handleAdd = (e) => {
        // e.preventDefault();
        let isValid = false;
        if (this.state.name.length > 0) {
            isValid = true;
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
        return(
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
                                    <Col md="12" className="form-group">
                                        <label htmlFor="feClientName">Client</label>

                                        <strong className="text-muted d-block mb-2">Checkboxes</strong>
                                        <fieldset>
                                            <FormCheckbox>Default</FormCheckbox>
                                        </fieldset>
                                        <fieldset>
                                            <FormCheckbox>Default</FormCheckbox>
                                        </fieldset>
                                        <fieldset>
                                            <FormCheckbox>Default</FormCheckbox>
                                        </fieldset>
                                        <fieldset>
                                            <FormCheckbox>Default</FormCheckbox>
                                        </fieldset>

                                        {/* <FormFeedback valid>You added a valid client.</FormFeedback> */}
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

export default DataSourcesForm;