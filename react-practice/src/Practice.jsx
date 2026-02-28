import { useFormStatus } from "react-dom";

const Practice = () => {
  const formstatus = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submited");
  };

  return (
    <>
      <h1>UseFormStatus Hook</h1>
      <form action={formstatus}>
        <UserForm />
      </form>
    </>
  );
};

export default Practice;

function UserForm() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <>
      <input type="text" placeholder="name" />
      <br />
      <br />
      <button disabled={pending}>submit</button>
    </>
  );
}
