import React from "react";
import { connect } from "react-redux";
import { addSources } from "../../redux/actions/reportActions";
import { incrementProgress } from "../../redux/actions/wizardActions";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    FormCheckbox,
    FormFeedback,
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
        e.preventDefault();
        if (this.state.sources.length > 0) {
            this.props.dispatch(addSources(this.state.sources + 'Estated API'));
            this.props.dispatch(incrementProgress());
        }
    }

    handleChange = (e) => {
        if (this.state.sources.includes(e.target.value)){
            this.setState({
                sources: this.state.sources.replace(e.target.value + ', ', '')
            });
        }else{
            this.setState({
                sources: this.state.sources + e.target.value + ', '
            });
        }
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
                                    {this.props.locked ? (
                                    <Row form>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox valid disabled value="MLS">MLS</FormCheckbox>
                                                <FormCheckbox valid disabled value="Inspection">Inspection</FormCheckbox>
                                            </fieldset>
                                        </Col>

                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox valid disabled value="Appraiser">Appraiser</FormCheckbox>
                                                <FormCheckbox valid disabled value="Public Records">Public Records</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox valid disabled value="Home Owner">Home Owner</FormCheckbox>
                                                <FormCheckbox valid disabled value="Other" >Other</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                        <Row><Col className="m-2"><h9 theme="success">Valid selection: {this.props.sources}</h9></Col></Row>
                                    </Row>)
                                    : (<Row form>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange} value="MLS">MLS</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange} value="Inspection">Inspection</FormCheckbox>
                                            </fieldset>
                                        </Col>

                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange} value="Appraiser">Appraiser</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange} value="Public Records">Public Records</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <fieldset>
                                                <FormCheckbox onChange={this.handleChange} value="Home Owner">Home Owner</FormCheckbox>
                                                <FormCheckbox onChange={this.handleChange} value="Other" >Other</FormCheckbox>
                                            </fieldset>
                                        </Col>
                                    </Row>)}
                                    <Row>
                                        <Col> 
                                            {
                                                this.props.locked === true ? 
                                                (<Button size="sm" disabled theme="success" onClick={this.handleAdd}>Add</Button>)
                                                : (<Button size="sm" theme="success" onClick={this.handleAdd}>Add</Button>)
                                            }</Col>
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