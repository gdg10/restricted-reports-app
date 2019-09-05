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

import { addClient } from "../../redux/actions";
import { connect } from "react-redux";

class ClientForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            passwords : ["sdf"]
        }
        
        // this.handleChange = this.handleChange.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
    }


//   // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords : passwords }));
  }


   handleAdd = (e) => {
        let isValid = false;
        if (this.state.name.length > 0) {
            isValid = true;
            this.props.dispatch(addClient(this.state.name));
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

                                        {/* <FormFeedback valid>You added a valid client.</FormFeedback> */}
                                    </Col>
                                </Row>
                                <Button onClick={this.handleAdd}>Add</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        name : state.report.client
    });
}

export default connect(mapStateToProps)(ClientForm);