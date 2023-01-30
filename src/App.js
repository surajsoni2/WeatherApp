import Temp from "./temp";
function App() {
  const apikey = process.env.REACT_APP_API_KEY
  return (
    <div className="App">
      <Temp apikey={apikey}/>
    </div>
  );
}

export default App;
