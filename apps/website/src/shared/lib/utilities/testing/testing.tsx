import { PropsWithChildren, ReactElement } from "react";
import { render as renderRTL, RenderResult as RenderResultRTL } from "@testing-library/react";
import userEvent, {UserEvent} from "@testing-library/user-event";
import TestWrapper from "./test-wrapper";

const createWrapper =
  (props = {}) =>
  ({ children }: PropsWithChildren) => <TestWrapper {...props}>{children}</TestWrapper>;

export const render = (ui: ReactElement, { routes = ["/"], ...options } = {}): { user: UserEvent } => ({
  user: userEvent.setup(),
  ...renderRTL(ui, { wrapper: createWrapper({ routes }), ...options }),
});

export * from "@testing-library/react";
