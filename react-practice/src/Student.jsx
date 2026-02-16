import { useState } from "react";

function Student(props) {
  return (
    <>
      {console.log(props.variable)}
      {console.log(props.obj.name)}
      {console.log(props.obj.age)}
      {console.log(props.obj.email)}
      {console.log(props.arr)}
      <hr />

      {props.jsxsentext}
      {props.fun}
      <h1>Student page</h1>

      <hr />
    </>
  );
}

export default Student;
