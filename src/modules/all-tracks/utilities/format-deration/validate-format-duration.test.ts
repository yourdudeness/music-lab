import { describe, expect, test } from "@jest/globals";
import { formatDuration } from "./format-track-duration";

describe("Валидные данные для продолжительности трека", () => {
  test.each([
    [65, "1:05"],
    [125, "2:05"],
    [59, "0:59"],
    [125, "2:05"]
  ])("Должен вернуть %s для %s", (input, expected) => {
    expect(formatDuration(input)).toBe(expected);
  });
});

describe("Не валидные данные", () => {
  test("Должен вернуть null для undefined", () => {
    expect(formatDuration(undefined)).toBe(null);
  });

  test("Должен вернуть null для 0", () => {
    expect(formatDuration(0)).toBe(null);
  });
});
