import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "store";

import Login from "./index";

afterEach(cleanup);

describe("Login Page", () => {
  it("All component in page Login show successfully", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

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

  // it("Method in button login can run successfully", () => {
  //   render(<Login />);

  //   global.window = Object.create(window);
  //   const url = "http://dummy.com";
  //   Object.defineProperty(window, "location", {
  //     value: {
  //       href: url,
  //     },
  //   });
  //   expect(window.location.href).toEqual(url);
  // });
});
