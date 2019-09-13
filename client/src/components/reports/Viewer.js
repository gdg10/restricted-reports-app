import React from 'react';
import { connect } from 'react-redux';
import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardBody
} from "shards-react";
import { clearActiveReport } from '../../redux/actions/activeReportActions';

const Viewer = (props) => {
    var active = !(props.activeReport === null);
    if (active) {
        return (
            <React.Fragment>
                <Card className="mb-3">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Report Viewer</h6>
                    </CardHeader>

                    <CardBody className="p-4  embed-responsive-16by9">
                        <Col>
                        <iframe style={{ height: "50vh", width: '100%' }}
                            title='activeReport' className="embed-responsive-item"
                            src={props.activeReport}
                            allowFullScreen>
                        </iframe>
                        </Col>
                        <Col>
                            <Row className="float-right">
                                <Button className="m-3 p-2" outline onClick={() => {
                                    props.dispatch(clearActiveReport())
                                }} theme="warning">Hide <i className="material-icons">flip_to_back</i></Button>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    } else {
        return ("");     // SHOW NOTHING IF NO REPORT IS ACTIVE
    }
}

const mapStateToProps = (state) => {
    return ({
        activeReport: state.activeReport.activeReport
    });
}

export default connect(mapStateToProps)(Viewer);