import AnimateText from "./components/AnimateText";
import AnimateLetters from "./components/AnimateLetters";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div>
      {/* <AnimateText text="Hello World, this is how to animate text." /> */}
      <AnimateLetters text="Buzzing for the F1 season to begin 🤩," />
      <Paragraph myParagraph="desperately wanna see the W14 🏎 in action!" />
    </div>
  );
}

export default App;
