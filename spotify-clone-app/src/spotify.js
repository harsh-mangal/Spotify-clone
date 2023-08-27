// export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
// const clientId = 'f8faab10735a4171838ac6233a65526f';
// const scopes = [
//   "user-read-current-playing",
//   "user-read-recently-played",
//   "user-read-playback-state",
//   "user-top-read",
//   "user-modify-playback-state",
// ];

// export const getTokenFromUrl = () => {
//   return window.location.hash
//     .substring(1)
//     .split("&")
//     .reduce((initial, item) => {
//       let parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//       return initial;
//     }, {});
// };
// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
//   "%20"
// )}
// &response_type=token&show_dialog=true`;
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/"; // Make sure this matches the redirect URI in your Spotify Developer Dashboard
const clientId = 'f8faab10735a4171838ac6233a65526f';
const scopes = [
  "user-read-current-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token&show_dialog=true`;
