import { useActionState } from "react";

function App() {
  const [state, userForm, panding] = useActionState(fornAction, undefined);

  async function fornAction(prevstate, formdata) {
    let name = formdata.get("name");
    let password = formdata.get("password");
    await new Promise((res) => setTimeout(res, 2000));

    if ((name, password)) {
      return { message: "Form Submited", name, password };
    } else {
      return { error: "Both field are required", name, password };
    }
  }

  return (
    <>
      <h1>This is App Comonent </h1>
      <form action={userForm}>
        <input
          defaultValue={state?.name}
          type="text"
          name="name"
          placeholder="enter name"
        />
        <br />
        <br />
        <input
          defaultValue={state?.password}
          type="text"
          name="password"
          placeholder="enter password"
        />
        <br />
        <br />
        <button disabled={panding}>Submit</button>
      </form>
      {state?.message && <span className="text-success">{state.message}</span>}
      {state?.error && <span className="text-danger">{state.error}</span>}
      <h3>{state?.name && state.name}</h3>
      <h3>{state?.password && state.password}</h3>
    </>
  );
}

export default App;
