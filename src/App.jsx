import { useState } from "react";
import Glowing from "./components/Glowing";
import AnimateLetters from "./components/AnimateLetters";

function App() {
  return (
    <div className="App">
      <Glowing text="Hello World, this is how to animate text." />
      <AnimateLetters text="Hello World, this is how to animate letters." />
    </div>
  );
}

export default App;
