import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

const spotify_client_Id = process.env.REACT_APP_SPOTFIY_CLIENT_ID;
const spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

console.log('hey')
function crap() {

  useEffect(() => {
  var authParameters = {
    method: 'POST',
    headers: {
    'Content-Type' : 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + spotify_client_Id + '&client_secret=' + spotify_client_secret
  }

  fetch('https://accounts.spotify.com/api/token', authParameters)
  .then(result => result.json())
  .then(data => console.log(data))
  }, []);
  console.log('hello')
    }

  crap()

export default App;
