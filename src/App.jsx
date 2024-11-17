import ConfirmButton from "./ConfirmButton";
import RejectedButton from "./RejectedButton";
import Sorento from "./Sorento";

function App() {
  return (
    <div className="App">
      <Sorento></Sorento>
      <div
        style={{ display: "flex", gap: "10px", margin: "20px 0px 0px 30px" }}
      >
        <RejectedButton></RejectedButton>
        <ConfirmButton></ConfirmButton>
      </div>
    </div>
  );
}

export default App;
