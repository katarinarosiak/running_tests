import axios from "axios";

function App() {

const handleClick = () => {
	console.log('button clicked');
	axios.get("http://localhost:3001")
}


  return (
    <div className="App">
			<button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
