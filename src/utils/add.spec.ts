import { describe, expect, it } from "vitest";
import add from "./add";

describe("add", () => {
  it("should add two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});
