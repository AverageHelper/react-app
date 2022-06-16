import type { PropsWithChildren } from "react";

interface OutLinkProps {
	href: string;
	className?: string;
}

/**
 * @example
 * import { OutLink } from "./OutLink";
 *
 * <OutLink href="https://example.com">Example</OutLink>
 */
export function OutLink(props: PropsWithChildren & OutLinkProps) {
	return (
		<a
			className={props.className ?? "App-link"}
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.children}
		</a>
	);
}
