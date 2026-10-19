import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TransformerVisualizer from "./TransformerVisualizer";

describe("TransformerVisualizer", () => {
  it("keeps the reverse-engineering sequence understandable without a WebGL canvas", () => {
    render(<TransformerVisualizer />);

    expect(screen.getByRole("img", { name: /transformer reverse-engineering diagram/i })).toBeInTheDocument();
    expect(screen.getByText("Token stream")).toBeInTheDocument();
    expect(screen.getByText("Attention topology")).toBeInTheDocument();
    expect(screen.getByText("Residual refinement")).toBeInTheDocument();
    expect(screen.getByText("Probability field")).toBeInTheDocument();
  });
});
