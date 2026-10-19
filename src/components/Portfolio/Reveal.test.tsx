import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reveal from "./Reveal";

describe("Reveal", () => {
  it("shows content when IntersectionObserver is unavailable", () => {
    render(<Reveal><p>Proof stays visible</p></Reveal>);

    expect(screen.getByText("Proof stays visible").parentElement).toHaveClass("is-visible");
  });
});
