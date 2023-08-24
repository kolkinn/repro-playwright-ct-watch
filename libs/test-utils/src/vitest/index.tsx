import type { queries, Queries, RenderHookOptions, RenderHookResult } from "@testing-library/react";
import { cleanup, renderHook } from "@testing-library/react";
import { afterEach } from "vitest";

// Side effect of importing this file, that cleans up hooks after each test
afterEach(() => cleanup());

/**
 * Renders a test component that will call the provided `callback`, including any hooks it calls, every time it renders.
 */
const customRenderHook = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement>
): RenderHookResult<Result, Props> =>
  renderHook(render, {
    // Wrap provider(s) here if needed
    // wrapper: ({ children }) => <div>{children}</div>,
    ...options,
  });

// Re-export everything hook related
export { waitFor, act } from "@testing-library/react";
export type { RenderHookOptions, RenderHookResult } from "@testing-library/react";

// Method override
export { customRenderHook as renderHook };
