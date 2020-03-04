import React from "react";
import ListItem from "../listItem/ListItem";
import PageError from "../pageError/PageError";

const List = props =>
  props.ps.length ? (
    props.ps.map(item => <ListItem key={item.title} ps={item} />)
  ) : (
    <PageError />
  );

export default List;
