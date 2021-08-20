import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "store";
import SearchBar from "./index";

describe("Search bar", () => {
  beforeEach(() => {
    const setSearch = jest.fn();
    render(
      <Provider store={store}>
        <SearchBar setSearch={setSearch} />
      </Provider>
    );
  });

  afterEach(cleanup);

  it("all component is rendered", () => {
    const inputSearch = screen.getByPlaceholderText(/Search music../i);
    const btnSearch = screen.getByRole("button", {
      name: /Search/i,
    });

    expect(inputSearch).toBeInTheDocument();
    expect(btnSearch).toBeInTheDocument();
  });

  it("Can type in input search", () => {
    const inputSearch = screen.getByPlaceholderText(/Search music../i);

    userEvent.type(inputSearch, "How you like that");
    expect(inputSearch).toHaveValue("How you like that");
  });
});
