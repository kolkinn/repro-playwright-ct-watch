import { expect, test } from "@demo/test-utils/playwright";

import Demo from "./demo";

test.describe("<Demo>", () => {
  test("should mount", async ({ mount }) => {
    const component = await mount(<Demo />);

    await expect(component).toBeVisible();
  });

  test("should increase count when pressing button", async ({ mount }) => {
    const component = await mount(<Demo />);

    await component.getByRole("button", { name: /^count is: 0$/i }).click();

    await expect(component.getByRole("button", { name: /^count is: 1$/i })).toBeVisible();
  });
});
