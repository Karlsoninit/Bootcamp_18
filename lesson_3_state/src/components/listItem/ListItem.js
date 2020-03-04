import React from "react";
import { Container, Image, Title, Warranty } from "./styled";

// import styles from "./list.module.css";

// console.log("styles", styles);

// const styles = () => ({
//   ListContainerSmall: {
//     width: "600px",
//     border: "1px solid green",
//     padding: "10px",
//     backgroundColor: "rgb(189, 22, 22)"
//   },

//   ListContainerLarge: {
//     border: "1px solid green",
//     padding: "10px",
//     width: "900px",
//     backgroundColor: "rgb(0, 255, 42)"
//   },

//   image: {
//     width: "100%"
//   }
// });

const ListItem = props => {
  // const css = styles();
  //   console.log(Object.keys(props).length);
  return (
    <Container
    // style={
    //   window.innerWidth > 800
    //     ? css.ListContainerLarge
    //     : css.ListContainerSmall
    // }
    // className={
    //   window.innerWidth > 800
    //     ? styles.ListContainerLarge
    //     : styles.ListContainerSmall
    // }
    >
      <Title>{props.ps.title}</Title>
      {/* <Warranty>{props.ps.warranty.year}</Warranty>
      <Image alt="playstation" src={props.ps.image} />
      {props.ps.isSale && (
        <button onClick={() => console.log(props.ps.id)}>PRESSSSSS !!!</button>
      )} */}
    </Container>
  );
};

export default ListItem;
