import { useState } from "react";

function useToggle(defaultval) {
  const [state, setstate] = useState(defaultval);

  function togel(val) {
    console.log(val);
    
    if (typeof val != "boolean") {
      setstate(!state);
    } else {
      setstate(val);
    }
  }

  return [state, togel];
}

export default useToggle;
