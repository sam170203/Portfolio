import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PortfolioPage from "./PortfolioPage";

describe("PortfolioPage", () => {
  it("shows the Software Engineer proposition and the proof-led page sections", () => {
    render(<PortfolioPage />);

    expect(screen.getByRole("heading", { level: 1, name: /software engineer/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /observable outcome/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /where i.ve built/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /next hard thing simpler/i })).toBeInTheDocument();
  });

  it("uses safe external source links instead of JavaScript-only buttons", () => {
    render(<PortfolioPage />);

    const github = screen.getByRole("link", { name: "GitHub profile" });
    expect(github).toHaveAttribute("href", "https://github.com/sam170203");
    expect(github).toHaveAttribute("rel", "noreferrer");
  });
});
