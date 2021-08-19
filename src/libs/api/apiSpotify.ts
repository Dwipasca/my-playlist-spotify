const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

type NewPlaylistState = {
  name: string;
  description: string;
};

const getSearchTracks = (search: string, accessToken: string) => {
  return fetch(`${SPOTIFY_ENDPOINT}/search?q=${search}&type=track&limit=10`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const createNewPlaylist = (
  userID: string,
  accessToken: string,
  newPlaylist: NewPlaylistState
) => {
  return fetch(`${SPOTIFY_ENDPOINT}/users/${userID}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      name: newPlaylist.name,
      description: newPlaylist.description,
      public: false,
      collaborative: false,
    }),
  }).then((res) => res.json());
};

const storeTracksToNewPlaylist = (
  newPlaylistId: string,
  accessToken: string,
  playlist: []
) => {
  return fetch(
    `${SPOTIFY_ENDPOINT}/playlists/${newPlaylistId}/tracks?position=0&uris=${playlist}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        uris: playlist,
        position: 0,
      }),
    }
  ).then((res) => res.json());
};

export { getSearchTracks, createNewPlaylist, storeTracksToNewPlaylist };
