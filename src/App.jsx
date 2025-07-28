import useDate from "./useDate";
import useSwitch from "./useSwitch";
import useCustomPointer from "./useCustomPointer";


import useKeyPress from "./useKeyPress";

function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>

      <div>
        <h2>Il valore è: {isOn ? "ON" : "OFF"}</h2>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h2>Data e ora attuali:</h2>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <div>
        <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
        {customPointer}
      </div>

      <div>
        <h1>Tieni premuto "Enter" per testare il custom hook</h1>
        <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </>
  )
}

export default App
