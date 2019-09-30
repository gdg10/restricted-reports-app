import React from "react";
import { connect } from "react-redux";
import { setView } from "../../redux/actions/CreateViewActions";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from "shards-react";

const buttonStyle = {
    float: 'right'
}

const ReportTypeCard = (props) => {
    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0"><i className="material-icons">note_add</i> {props.title}</h6>
            </CardHeader>
            <CardBody>
                {props.des}
            </CardBody>
            <CardFooter>
                <Button onClick={() => { props.dispatch(setView(props.view)) }} style={buttonStyle}>New</Button>
            </CardFooter>
        </Card>
    )
}

export default connect()(ReportTypeCard);