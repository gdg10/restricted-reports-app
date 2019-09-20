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
    CardBody,
    CardFooter,
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    FormFeedback,
    Button
} from "shards-react";



class ComparativeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    buttonStyle = {
        float: 'right'
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0"><i className="material-icons">note_add</i> Comparative Property Report</h6>
                </CardHeader>
                <CardBody>
                    <p>Compare a subject property to similar sales. Determine a price range.</p>
                </CardBody>
                <CardFooter>
                    <Button style={this.buttonStyle}>New</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default connect()(ComparativeCard);