import { describe, expect, it } from "vitest";
import { experience, profile, projects, skills } from "./portfolio";

describe("portfolio claims", () => {
  it("presents NCR Atleos as a Software Engineer role without a lineage-delivery claim", () => {
    const ncr = experience.find(({ company }) => company === "NCR Atleos");

    expect(ncr?.role).toBe("Software Engineer, Data Platform Engineering");
    expect(ncr?.highlights.join(" ").toLowerCase()).not.toContain("data lineage");
    expect(ncr?.highlights.join(" ")).toContain("34,000+");
  });

  it("keeps CodeArena team attribution beside its outcome", () => {
    const codeArena = projects.find(({ name }) => name === "CodeArena");

    expect(codeArena?.contribution).toContain("three-member team");
    expect(codeArena?.outcome).toContain("2,000+");
  });

  it("uses Software Engineer positioning", () => {
    expect(profile.role).toContain("Software Engineer");
  });

  it("presents agentic and AI-native capabilities without claiming a shipped agent product", () => {
    expect(skills.map(({ title }) => title)).toEqual(expect.arrayContaining(["Agentic workflows", "AI-native delivery"]));
    expect(skills.find(({ title }) => title === "Agentic workflows")?.detail).toContain("retrieval-backed memory");
  });
});
