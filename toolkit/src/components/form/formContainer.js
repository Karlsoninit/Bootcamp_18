import { connect } from "react-redux";
import { addNotes } from "../../redux/actions";

import Form from "./Form";

export default connect(null, { addNotes })(Form);
