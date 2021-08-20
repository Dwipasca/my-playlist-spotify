import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";

// ? redux
import store from "store";
// ? components
import Login from "./index";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  afterEach(cleanup);

  it("All component in page Login show successfully", () => {
    const heading1 = screen.getByText(/without music, life/i);
    const heading2 = screen.getByText(/would be a mistake/i);
    const btnLogin = screen.getByRole("button", {
      name: /please login first/i,
    });

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();

    // screen.debug();
  });
});
