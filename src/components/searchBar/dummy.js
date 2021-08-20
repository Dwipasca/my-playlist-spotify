import { rest } from "msw";
import { setupServer } from "msw/node";

const tracks = {
  items: [
    {
      album: { images: [{ url: "image url" }] },
      artists: [{ name: "artist name" }],
      duration_ms: 261013,
      name: "song name",
      uri: "uri",
    },
  ],
};

export const handlers = [
  rest.get("https://api.spotify.com/v1/search", (req, res, ctx) => {
    return res(ctx.json({ tracks }));
  }),
];

export const server = setupServer(...handlers);
