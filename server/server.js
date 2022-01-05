// This is our authorization server
const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();


app.use(cors())
app.use(bodyParser.json())

// This is our route for the refresh token
app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
       redirectUri: "http://localhost:3000",
       clientId: "bb70477ae18942578967a97b35b07207",
       clientSecret: "25c27b8da20440b3a5509017456812c9",
       refreshToken
    })
    
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        }).catch(() => {
            res.sendStatus(400)
        })
})

// This will validate credentials and redirect the user back to the client with auth code
app.post("/LandingPage", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
// passing credentials
      redirectUri: "http://localhost:3000",
      clientId: "bb70477ae18942578967a97b35b07207",
      clientSecret: "25c27b8da20440b3a5509017456812c9",
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
// The access token allows the application to access the API
// The application receives the access token after the user successfully authenticates and authorizes access
            accessToken: data.body.access_token,
// The refresh token is used to obtain additional access tokens without having to collect credentials every time one expires
            refreshToken: data.body.refresh_token,
// The “expires_in” value is the number of seconds that the access token will be valid         
           expiresIn: data.body.expires_in,
        })
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})


app.listen(3001)