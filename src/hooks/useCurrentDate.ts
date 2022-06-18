import { useEffect, useState } from "react";

/**
 * Creates a `Date` value that updates every second.
 *
 * @example
 * import { useCurrentDate } from "./useCurrentDate";
 *
 * function Clock() {
 * 	const date = useCurrentDate();
 * 	return <h1>It is {date.toLocaleTimeString()}.</h1>;
 * }
 */
export function useCurrentDate() {
	const [date, setDate] = useState(new Date()); // now

	function tick() {
		setDate(new Date()); // each tick, set now
	}

	useEffect(() => {
		const timer = setInterval(tick, 1000); // on load, do tick

		return () => clearInterval(timer); // on kill, stop tick
	}, []);

	return date;
}
