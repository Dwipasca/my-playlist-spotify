// import "whatwg-fetch";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
import { render, screen, cleanup } from "@testing-library/react";
// import TrackList from "components/trackList";
// import { getSearchTracks } from "libs/api/apiSpotify";
import { Provider } from "react-redux";
import store from "store";
import SearchBar from "./index";

// const tracks = {
//   items: [
//     {
//       album: { images: [{ url: "image url" }] },
//       artists: [{ name: "artist name" }],
//       duration_ms: 261013,
//       name: "whistle",
//       uri: "uri",
//     },
//   ],
// };

// const server = setupServer(
//   rest.get("https://api.spotify.com/v1/search", (req, res, ctx) => {
//     return rest(ctx.status(200), ctx.json({ tracks }));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close);
// afterEach(() => server.resetHandlers());

describe("Search bar", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <SearchBar />
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

  // it("is this works", async () => {
  //   const searchData = await getSearchTracks(tracks);
  //   render(
  //     <Provider store={store}>
  //       <TrackList tracks={searchData} />
  //     </Provider>
  //   );

  //   const data = screen.getByText(/whistle/i);
  //   expect(data).toBeInTheDocument();

  //   screen.debug();
  // });
});
