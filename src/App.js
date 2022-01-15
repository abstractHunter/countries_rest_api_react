import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='details' element={<Details />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
