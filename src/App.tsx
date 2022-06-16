import { Logo } from "./components/Logo";
import { OutLink } from "./components/OutLink";
import "./App.css";

export function App() {
	const thisFile = "src/App.tsx";

	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<p>
					Edit <code>{thisFile}</code> and save to reload.
				</p>
				<OutLink className="App-link" href="https://reactjs.org">
					Learn React
				</OutLink>
			</header>
		</div>
	);
}
