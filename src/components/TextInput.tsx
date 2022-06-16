import type { ChangeEvent } from "react";

interface Props {
	label: string;
	required?: boolean;
	value: string;
	onChange: (newValue: string) => void;
}

/**
 * A simple labeled text input component.
 *
 * @example
 * import { TextInput } from "./TextInput";
 * <TextInput label="Some Text" value={this.state.value} onChange={handleChange}  />
 */
export function TextInput(props: Props) {
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		props.onChange(value);
	}

	return (
		<label>
			<span>{props.label}</span>
			<input
				type="text"
				name={props.label}
				required={props.required ?? false}
				aria-required={props.required ?? false}
				value={props.value}
				onChange={handleChange}
			/>
		</label>
	);
}
