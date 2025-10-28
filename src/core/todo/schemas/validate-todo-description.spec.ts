import { validateTodoDescription } from "./validate-todo-description";

describe("validateTodoDescription (unit)", () => {
  test("should return errors when the description has fewer than 4 characters", () => {
    const description = "abc";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      "Description must be longer than 3 characters",
    ]);
    expect(result.success).toBe(false);
  });

  test("should return success when the description has more than 3 characters", () => {
    const description = "abcd";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);
    expect(result.success).toBe(true);
  });
});
