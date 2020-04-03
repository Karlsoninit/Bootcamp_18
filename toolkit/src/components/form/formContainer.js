import { connect } from "react-redux";
// import {  } from "../../redux/actions";
import { putData, getData } from "../../redux/operations";
import Form from "./Form";

export default connect(null, { putData, getData })(Form);
