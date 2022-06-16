import type { PropsWithChildren } from "react";

interface Props {
	href: string;
	className?: string;
}

/**
 * An anchor that links to a page on a new browser tab.
 *
 * @example
 * import { OutLink } from "./OutLink";
 * <OutLink href="https://example.com">Example</OutLink>
 */
export function OutLink(props: PropsWithChildren & Props) {
	return (
		<a className={props.className} href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	);
}
