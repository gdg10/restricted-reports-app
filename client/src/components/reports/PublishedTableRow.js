import React from "react";
import { connect } from "react-redux";
import { Button } from "shards-react";
import { removeReport } from "../../redux/actions/allReportsActions";
import { makeActiveReport } from "../../redux/actions/activeReportActions";

const PublishedTableRow = (props) => {
    return (
        <tr>
            {/* REPORT METADATA */}
            <td style={{verticalAlign: 'middle'}}><b>{props.number + 1}</b></td>
            <td style={{verticalAlign: 'middle'}}>{props.report.address}</td>
            <td style={{verticalAlign: 'middle'}}>{props.report.status}</td>
            <td style={{verticalAlign: 'middle'}}>{props.report.completion}</td>

            {/* BUTTON THAT WILL REMOVE ROW FROM TABLE ONCLICK */}
            <td><Button outline onClick={() => {
                props.dispatch(makeActiveReport(props.link))
            }} theme="success"><i className="material-icons">pageview</i></Button></td>

            {/* BUTTON THAT VIEW REPORT ONCLICK */}
            <td><Button outline onClick={() => {
                props.dispatch(removeReport(props.number))
            }} theme="danger"><i className="material-icons">delete</i></Button></td>
        </tr>
    )
}

export default connect()(PublishedTableRow);