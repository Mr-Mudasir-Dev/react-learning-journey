import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Practice from "./Practice";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

function App() {
  const inputforref = useRef();

  const func = (e) => {
    e.preventDefault();
    console.log(inputforref);
    inputforref.current.focus();
    inputforref.current.style.color = "red";
  };

  async function formfun() {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submited");
  }

  const Customer = () => {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <>
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  };

  return (
    <>
      <h1>This is App Comonent</h1>
      <br />
      <h2>this is other component</h2>
      <form action="">
        <Practice btnref={inputforref} fun={func} />
      </form>
      <br />
      <br />
      <br />
      <br />

      <form action={formfun}>
        <Customer />
      </form>
    </>
  );
}

export default App;
