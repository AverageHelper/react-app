import type { FallbackProps } from "react-error-boundary";

/**
 * @example
 * import { ErrorBoundary } from "react-error-boundary";
 * import { ErrorFallback } from "./ErrorFallback";
 *
 * <ErrorBoundary
 * 	FallbackComponent={ErrorFallback}
 * 	onError={error => console.error(error)}
 * 	onReset={() => {
 * 		// reset app state
 * 	}}
 * >
 * 	{...}
 * </ErrorBoundary>
 */
export function ErrorFallback(props: FallbackProps) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{props.error.message}</pre>
			<button onClick={props.resetErrorBoundary}>Try again</button>
		</div>
	);
}
