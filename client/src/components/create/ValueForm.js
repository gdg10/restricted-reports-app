import React from "react";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
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

class ValueForm extends React.Component {

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
        return ('')
        //     <Form>
        //         <ListGroup flush>
        //             <ListGroupItem className="p-3">
        //                 <Row>
        //                     <Col>min</Col>
        //                     <Col >max</Col>
        //                 </Row>
        //             <ListGroupItem />
        //             <ListGroupItem className="p-3">
        //                 <Row form>
        //                     <Col md="12" className="form-group">
        //                         <label htmlFor="feClientName">Value</label>
        //                         <ReactQuill className="add-new-post__editor mb-1" />
        //                     </Col>
        //                 </Row>
        //                 <Row>
        //                     <Button onClick={this.handleAdd}>Add</Button>
        //                 <Row>
        //             </ListGroupItem>
        //         </ListGroup>
        //     </Form>
        // )
    }
}

export default ValueForm;