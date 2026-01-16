import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "./redux/feature/slice"; // adjust path

const App = () => {
  const isDark = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: 800,
        width: 1500,
        backgroundColor: isDark ? "#000000" : "#ffffff",
      }}
    >
      <button style={{display:"flex",justifyContent:"center",alignItems:"center"}}  onClick={() => dispatch(toggle())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
