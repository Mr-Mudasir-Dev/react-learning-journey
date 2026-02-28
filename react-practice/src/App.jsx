import { useTransition } from "react";
import { useFormStatus } from "react-dom";

function App() {
  const [ispanding, setTranstion] = useTransition();

  const handeler = () => {
    setTranstion(async () => {
      await new Promise((res) => setTimeout(res, 5000));
      console.log("submited");
    });
  };

  const formstatus = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submited");
  };

  function formhandel() {
    const { pending } = useFormStatus();
  }

  return (
    <>
      <h1>This is App Comonent </h1>
      <hr />
      <h3>Use Transtion Hook</h3>
      {ispanding ? (
        <img
          src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif"
          width="100px"
          alt=""
        />
      ) : null}
      <button disabled={ispanding} onClick={handeler}>
        Click
      </button>
      <hr />
      <br />
      <br />
      <br />
      <hr />
      <h3>UseFormStatus Hook</h3><br />
      <form action={formstatus}>
        <input type="text" placeholder="name" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </>
  );
}

export default App;
