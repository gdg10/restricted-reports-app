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
                    <Button onClick={() => {this.props.dispatch(setView(2))}} style={this.buttonStyle}>New</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default connect()(ComparativeCard);