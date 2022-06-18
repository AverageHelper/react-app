import { useCurrentDate } from "../hooks/useCurrentDate";

/**
 * An example of a stateful functional component.
 *
 * @example
 * import { Clock } from "./Clock";
 * <Clock />
 */
export function Clock() {
	const date = useCurrentDate();
	return <h1>It is {date.toLocaleTimeString()}.</h1>;
}

// ** Using our own hooks

/*
import { useEffect, useState } from "react";

/**
 * An example of a stateful functional component.
 *
 * @example
 * import { Clock } from "./Clock";
 * <Clock />
 * /
export function Clock() {
	const [date, setDate] = useState(new Date()); // now

	function tick() {
		setDate(new Date()); // each tick, set now
	}

	useEffect(() => {
		const timer = setInterval(tick, 1000); // on load, do tick

		return () => clearInterval(timer); // on kill, stop tick
	}, []);

	return <h1>It is {date.toLocaleTimeString()}.</h1>;
}
*/

// ** Using the class syntax, in case you need a refresher on how the above used to look:

/*
import { Component } from "react";

interface ClockState {
	date: Date;
}

/**
 * An example of a stateful component.
 *
 * @example
 * import { Clock } from "./Clock";
 * <Clock />
 * /
export class Clock extends Component<object, ClockState> {
	timer: number | null;

	constructor() {
		super({});
		this.state = { date: new Date() };
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		if (this.timer === null) return;
		clearInterval(this.timer);
		this.timer = null;
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>;
	}
}

*/
