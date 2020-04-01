import { connect } from "react-redux";
import { delTask, getTask } from "../../redux/operations";
import ListItem from "./ListItem";

const mapDTP = {
  delTask,
  getTask
};

const mapSTP = state => ({
  token: state.token
});

export default connect(mapSTP, mapDTP)(ListItem);
