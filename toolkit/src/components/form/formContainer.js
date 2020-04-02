import { connect } from "react-redux";
import { addNotes, updateNotes } from "../../redux/actions";

import Form from "./Form";

export default connect(null, { addNotes, updateNotes })(Form);
