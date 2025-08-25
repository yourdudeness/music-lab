import { describe, expect, test } from "@jest/globals";
import { formatDuration } from "./format-track-duration";

describe("Валидные данные для продолжительности трека", () => {
  test("Базовые значения", () => {
    expect(formatDuration(65)).toBe("1:05");
    expect(formatDuration(15)).toBe("0:15");
    expect(formatDuration(59)).toBe("0:59");
    expect(formatDuration(60)).toBe("1:00");
    expect(formatDuration(71)).toBe("1:11");
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
