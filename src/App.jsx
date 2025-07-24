import useDate from "./useDate";
import useSwitch from "./useSwitch";

function App() {

  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

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
    </>
  )
}

export default App
