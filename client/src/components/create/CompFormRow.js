import React from "react";
import { connect } from "react-redux";
import { removeComp } from "../../redux/actions/reportActions"
import { Button } from "shards-react";

// TABLE ROW DISPLAYING A SALES COMPARABLE
const CompFormRow = (props) => {
    return (
        <tr>

            {/* COMP INFO */}
            <td>{props.number + 1}</td>
            <td>{props.comp.address + " " + props.comp.address2}</td>
            <td>{props.comp.city}</td>
            <td>{props.comp.state}</td>
            <td>{props.comp.zip}</td>
            <td>{props.comp.mls}</td>
            
            {/* BUTTON THAT WILL REMOVE ROW FROM TABLE ONCLICK */}
            <td>
                <Button outline onClick={()=>{
                        props.dispatch(removeComp(props.number))
                    }} theme="danger">remove</Button>
            </td>
        </tr>
    )
}

export default connect()(CompFormRow);