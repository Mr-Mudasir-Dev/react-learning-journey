import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function App() {
  const passlogic = z.object({
    pass: z.string().superRefine((val, ctx) => {
      if (val.length < 8) {
        ctx.addIssue({ message: "Kam az kam 8 characters!" });
      }
      if (val.length > 32) {
        ctx.addIssue({ message: "Zyada se zyada 32 characters!" });
      }
      if (!/[A-Z]/.test(val)) {
        ctx.addIssue({ message: "Ek capital letter chahiye!" });
      }
      if (!/[a-z]/.test(val)) {
        ctx.addIssue({ message: "Ek small letter chahiye!" });
      }
      if (!/[0-9]/.test(val)) {
        ctx.addIssue({ message: "Ek number chahiye!" });
      }
      if (!/[!@#$%^&*]/.test(val)) {
        ctx.addIssue({ message: "Ek special character chahiye!" });
      }
    }),
    confirmpass: z.string(),
  }).refine(
    (data) => data.pass === data.confirmpass,
    {
      message: "Dono password same hone chahiye!",
      path: ["confirmpass"],
    }
  );

  const {
    register: userform,
    handleSubmit: userhandleSubmit,
    watch,                          // ✅ add kiya
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passlogic),
  });

  const val = watch("pass");        // ✅ add kiya

  const myuserform = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Form Validation useForm + Zod</h1>
      <br />
      <form onSubmit={userhandleSubmit(myuserform)} className="m-5">
        
        {/* Password */}
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            {...userform("pass")}
          />
          {errors.pass?.message && (
            <p style={{ color: "red" }}>{errors.pass.message}</p>
          )}

          {/* Password Strength */}
          <ul>
            <li style={{ color: val?.length >= 8 ? "green" : "red" }}>
              8 characters
            </li>
            <li style={{ color: /[A-Z]/.test(val || "") ? "green" : "red" }}>
              Capital letter
            </li>
            <li style={{ color: /[0-9]/.test(val || "") ? "green" : "red" }}>
              Number
            </li>
            <li style={{ color: /[!@#$%^&*]/.test(val || "") ? "green" : "red" }}>
              Special character
            </li>
          </ul>
        </div>

        {/* Confirm Password */}
        <div className="form-group mt-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password dobara likho"
            {...userform("confirmpass")}
          />
          <small className="text-danger">
            {errors.confirmpass?.message}
          </small>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;