import { render, screen } from "@testing-library/react";
import { OutLink } from "./OutLink";

describe("OutLink", () => {
	test("renders content", () => {
		render(<OutLink href="#">here</OutLink>);
		const linkElement = screen.getByText(/here/iu);
		expect(linkElement).toBeInTheDocument();
	});

	test("includes rel='noopener noreferrer'", () => {
		render(<OutLink href="#">here</OutLink>);
		const linkElement = screen.getByText(/here/iu);
		expect(linkElement).toHaveProperty("rel", "noopener noreferrer");
	});

	test("includes target='_blank'", () => {
		render(<OutLink href="#">here</OutLink>);
		const linkElement = screen.getByText(/here/iu);
		expect(linkElement).toHaveProperty("target", "_blank");
	});

	test.each`
		href
		${"#"}
		${"https://example.com"}
		${"notaurl"}
		${"still not a url"}
	`("includes the provided href '$href'", ({ href }: { href: string }) => {
		render(<OutLink href={href}>here</OutLink>);
		const linkElement = screen.getByText(/here/iu);
		expect(linkElement).toHaveProperty("rel", "noopener noreferrer");
	});
});
