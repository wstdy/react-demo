import React, { useState } from "react";
function Hook(props) {
  const [count, setCount] = useState(0)
  const test = (e) => {
    console.log(e)
    setCount(2)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => test()}>增加</button>
    </div>
  )
}

export default Hook;