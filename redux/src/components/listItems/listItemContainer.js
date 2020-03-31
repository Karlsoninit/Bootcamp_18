import { connect } from "react-redux";
import { delTask, getTask } from "../../redux/operations";
import ListItem from "./ListItem";

const mapDTP = {
  delTask,
  getTask
};

export default connect(null, mapDTP)(ListItem);
