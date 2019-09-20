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
    FormInput,
    FormGroup,
    FormCheckbox,
    FormSelect,
    FormFeedback,
    Button
} from "shards-react";



class AVMCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">AVM Report</h6>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        Estimate the value of a subject property
                    </ListGroupItem>
                    <ListGroupItem className="p-3">
                        go button
                    </ListGroupItem>
                </ListGroup>
            </Card>
        )
    }
}

export default connect()(AVMCard);