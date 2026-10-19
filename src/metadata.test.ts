import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

describe("portfolio metadata", () => {
  it("uses consistent Software Engineer branding for search and social previews", () => {
    expect(html).toContain("Saksham Mudgal Sharma — Software Engineer");
    expect(html).toContain("https://saksham-portfolio-26.vercel.app/");
    expect(html).toContain('"jobTitle": "Software Engineer"');
    expect(html).not.toContain("AI Enthusiast");
  });
});
