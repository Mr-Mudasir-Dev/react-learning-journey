import { useId } from "react";

const Practice = () => {
  const id = useId();

  return (
    <>
      <h1>useId Hook learn</h1>

      <br />
      <br />
      <h1>Form number 1</h1>
      <br />

      <label htmlFor={id + "name"}>Name</label>
      <input id={id + "name"} type="text" name="" />

      <br />

      <label htmlFor={id + "email"}>Name</label>
      <input type="text" name="" id={id + "email"} />

      <br />

      <label htmlFor={id + "pass"}>Name</label>
      <input type="text" name="" id={id + "pass"} />

      <br />

      <label htmlFor={id + "city"}>Name</label>
      <input type="text" name="" id={id + "city"} />

      <br />
      <br />
      <br />
      <br />
      <h1>Form number 2</h1>
      <br />

      <label htmlFor={id + "adminname"}>Name</label>
      <input id={id + "adminname"} type="text" name="" />

      <br />

      <label htmlFor={id + "adminemail"}>Name</label>
      <input type="text" name="" id={id + "adminemail"} />

      <br />

      <label htmlFor={id + "adminpass"}>Name</label>
      <input type="text" name="" id={id + "adminpass"} />

      <br />

      <label htmlFor={id + "admincity"}>Name</label>
      <input type="text" name="" id={id + "admincity"} />
    </>
  );
};

export default Practice;
