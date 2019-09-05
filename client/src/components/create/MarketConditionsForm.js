import React from "react";
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

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import NavButtons from "./NavButtons";

class MarketConditionsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valid: false,
            market: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
    }


    handleAdd = (e) => {
        e.preventDefault();
        let isValid = false;
        if (this.state.market.length > 0) {
            isValid = true;
        }

        this.setState({
            valid: isValid
        });
    }

    handleChange = (e) => {
        alert();
        this.setState({
            name: e.target.value
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
                                        <label htmlFor="feClientName">Market Conditions</label>
                                        {/* Editor */}
                                        <Form className="add-new-post">
                                            <ReactQuill onChange={this.handleChange} className="add-new-post__editor mb-1" />
                                        </Form>
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
            </Row>
            </Card>
        )
    }
}

export default MarketConditionsForm;