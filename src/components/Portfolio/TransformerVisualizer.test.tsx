import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TransformerVisualizer from "./TransformerVisualizer";

describe("TransformerVisualizer", () => {
  it("keeps the reverse-engineering sequence understandable without a WebGL canvas", () => {
    render(<TransformerVisualizer />);

    expect(screen.getByRole("img", { name: /transformer reverse-engineering diagram/i })).toBeInTheDocument();
    expect(screen.getByText("Input tokens")).toBeInTheDocument();
    expect(screen.getByText("Multi-head attention")).toBeInTheDocument();
    expect(screen.getByText("Feed-forward network")).toBeInTheDocument();
    expect(screen.getByText("Next-token output")).toBeInTheDocument();
  });
});
