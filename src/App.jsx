import HeaderBar from "./components/HeaderBar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<HeaderBar />
			<Outlet />
		</>
	);
}

export default App;
