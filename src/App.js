import { useState } from "react";
import "./App.css";
function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("null");

  const clickhandler = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-yellow-700">
      <div className=" text-[#000] 	text-4xl font-bold  py-[52px] px-2 justify-center text-center flex  ">
        ADDITION OF TWO NUMBERS
      </div>
      <div className="text-2xl flex gap-20 text-center justify-center py-2 px-3 text-green-400">
        <div>Enter the first Value</div>
        <div>Enter the Second Value</div>
      </div>

      <div className="justify-center text-center flex gap-10 py-2">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter the first value"
          className="w-[15.5em] h-[2em]"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter the Second value"
          className="w-[15.5em] h-[2em]"
        />
      </div>

      <div className="justify-center text-center flex gap-48 py-10 my-1">
        <button
          className="rounded-md bg-zinc-500    btn  "
          onClick={clickhandler}
        >
          click here
        </button>
        <div className="text-3xl font-bold  rs">
          {" "}
          {result !== null && <h2>Result:{result}</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;
