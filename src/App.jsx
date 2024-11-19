import ConfirmButton from "./Car/ConfirmButton";
import RejectedButton from "./Car/RejectedButton";
import Sorento from "./Car/Sorento";

function App() {
  return (
    <div className="App">
      <Sorento></Sorento>
      <RejectedButton></RejectedButton>
      <ConfirmButton></ConfirmButton>
    </div>
  );
}

export default App;
