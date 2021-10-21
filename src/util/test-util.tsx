import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

type TOptions = {
  preloadedState: any;
  store: any;
  renderOptions?: RenderOptions[];
}

function render(
  ui: any,
  options?: TOptions,
) {

  const Wrapper: React.ComponentType = ({ children }: { children?: React.ReactNode }) => {
    return <Provider store={options?.store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options?.renderOptions })
}

export * from '@testing-library/react'

export { render }