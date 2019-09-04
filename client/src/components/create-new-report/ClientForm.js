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

class ClientForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valid: false,
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

                                        {this.state.valid === true ?
                                            <FormInput
                                                required
                                                disabled
                                                valid
                                                id="feClientName"
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

export default ClientForm;