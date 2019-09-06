import React from "react";
import { connect } from "react-redux";
import { removeComp } from "../../redux/actions/reportActions"
import { Button } from "shards-react";

// TABLE ROW DISPLAYING A SALES COMPARABLE
const CompFromRow = (props) => {
    return (
        <tr>

            {/* COMP INFO */}
            <td>{props.key}</td>
            <td>{props.address + props.address2}</td>
            <td>{props.city}</td>
            <td>{props.state}</td>
            <td>{props.zip}</td>
            <td>{props.mls}</td>
            
            {/* BUTTON THAT WILL REMOVE ROW FROM TABLE ONCLICK */}
            <td>
                <Button outline onClick={()=>{
                        props.useDispatch(removeComp(props.key))
                    }} theme="danger" small>remove</Button>
            </td>
        </tr>
    )
}

export default connect()(CompFromRow);