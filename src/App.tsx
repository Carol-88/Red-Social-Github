import { Button } from "@mui/material";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Bienvenidos a React con MUi</h1>
			<Button variant="text">Hola</Button>
			<Button variant="contained">Hello</Button>
			<Button variant="outlined">Bon jour</Button>
		</div>
	);
}

export default App;
