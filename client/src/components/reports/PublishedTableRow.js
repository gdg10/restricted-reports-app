// return (
//     <tr>

//         {/* COMP INFO */}
//         <td>{props.number}</td>
//         <td>{props.comp.address + props.comp.address2}</td>
//         <td>{props.comp.city}</td>
//         <td>{props.comp.state}</td>
//         <td>{props.comp.zip}</td>
//         <td>{props.comp.mls}</td>
        
//         {/* BUTTON THAT WILL REMOVE ROW FROM TABLE ONCLICK */}
//         <td>
//             <Button outline onClick={()=>{
//                     props.dispatch(removeComp(props.number))
//                 }} theme="danger" small>remove</Button>
//         </td>
//     </tr>
// )