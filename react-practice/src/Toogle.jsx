import { useState } from "react";
function useToggle(defaultval) {
  const [state, setstate] = useState(defaultval);
  console.log(defaultval);
}

export default useToggle;
