import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "store";

import ModalCreatePlaylist from "./index";

describe("Modal Create Playlist", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ModalCreatePlaylist isOpen={true} />
      </Provider>
    );
  });
  afterEach(cleanup);

  it("All component is rendered", () => {
    const inputName = screen.getByPlaceholderText(/Name Playlist/i);
    const inputDescription = screen.getByPlaceholderText(
      /Description about new playlist/i
    );
    const btnCancel = screen.getByRole("button", {
      name: "Cancel",
    });
    const btnCreate = screen.getByRole("button", {
      name: "Create New Playlist",
    });
    expect(inputName).toBeInTheDocument();
    expect(inputDescription).toBeInTheDocument();
    expect(btnCancel).toBeInTheDocument();
    expect(btnCreate).toBeInTheDocument();
  });

  it("Can type in elements input", () => {
    const inputName = screen.getByPlaceholderText(/Name Playlist/i);
    const inputDescription = screen.getByPlaceholderText(
      /Description about new playlist/i
    );

    userEvent.type(inputName, "My favorite music");
    userEvent.type(inputDescription, "This is ma favorite musics");
    expect(inputName).toHaveValue("My favorite music");
    expect(inputDescription).toHaveValue("This is ma favorite musics");
  });
});
