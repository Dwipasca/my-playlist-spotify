import { cleanup, render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Provider } from "react-redux";
import store from "store";

import Navbar from "components/navbar";
import { getProfile } from "libs/api/authSpotify";

const server = setupServer(
  rest.get("https://api.spotify.com/v1/me", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        display_name: "Dwi Pasca",
        images: {
          url: "test Image",
        },
      })
    );
  })
);

describe("render component authNavbar properly", () => {
  beforeAll(() => server.listen());
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });
  afterAll(() => server.close());
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });

  it("render name correctly", async () => {
    const sccess_token = "secret";
    const userData = await getProfile(sccess_token);
    const name = userData.display_name;
    const image = userData.images.url;

    expect(name).toBe("Dwi Pasca");
    expect(image).toBeTruthy();
  });

  it("All component is rendered", () => {
    const menuItemProfile = screen.getByText(/Profile/i);
    const switchMode = screen.getByText(/Switch to dark mode/i);
    const menuItemLogout = screen.getByText(/Logout/i);
    expect(menuItemProfile).toBeInTheDocument();
    expect(menuItemLogout).toBeInTheDocument();
    expect(switchMode).toBeInTheDocument();
  });
});
