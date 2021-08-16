const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;
const SCOPE = ["playlist-modify-private", "user-read-email"];
const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

const loginAuthorizeSpotify = (): void => {
  window.location.replace(
    `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`
  );
};

const getProfile = (accessToken: string) => {
  return fetch(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

export { loginAuthorizeSpotify, getProfile };
