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
                                    <Col md="4" className="form-group">
                                    <fieldset>
                                            <FormCheckbox>MLS</FormCheckbox>
                                            <FormCheckbox>Inspection</FormCheckbox>
                                        </fieldset>
                                    </Col>
                                        
                                    <Col md="4" className="form-group">
                                        <fieldset>
                                            <FormCheckbox>Appraiser</FormCheckbox>
                                            <FormCheckbox>Public Records</FormCheckbox>
                                        </fieldset>
                                    </Col>   
                                    <Col md="4" className="form-group">
                                        <fieldset>
                                            <FormCheckbox>Home Owner</FormCheckbox>
                                            <FormCheckbox>Other</FormCheckbox>
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

export default DataSourcesForm;