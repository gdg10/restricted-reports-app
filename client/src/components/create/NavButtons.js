import React from "react";
import { connect } from "react-redux";
import { nextPrompt, lastPrompt } from "../../redux/actions/promptActions";
import { Button, ButtonGroup } from "shards-react";

const navButtons = props => {
  return "";
  // NAVAGATION BUTTON GROUP
  // <ButtonGroup className="mb-0 float-right">
  //   {/* LAST PROMPT BUTTON */}
  //   <Button
  //     theme="white"
  //     onClick={() => {
  //       props.dispatch(lastPrompt());
  //     }}
  //   >
  //     <i className="material-icons">arrow_left</i>
  //     Last
  //   </Button>

  //   {/* NEXT PROMPT BUTTON */}
  //   <Button
  //     theme="white"
  //     onClick={() => {
  //       props.dispatch(nextPrompt());
  //     }}
  //   >
  //     Next
  //     <i className="material-icons">arrow_right</i>
  //   </Button>
  // </ButtonGroup>
};

export default connect()(navButtons);
