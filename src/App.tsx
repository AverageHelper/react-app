import { Logo } from "./components/Logo";
import { OutLink } from "./components/OutLink";
import "./App.css";

export function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<OutLink href="https://reactjs.org">Learn React</OutLink>
			</header>
		</div>
	);
}
