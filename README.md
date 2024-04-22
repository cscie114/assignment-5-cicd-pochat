# About this project
This Gatsby project pulls data from the Youtube API, including CI/CD testing, and a serverless function.

## Deployment
The project is deployed via Netlify

Find the application running at
https://csci-assignment-5.netlify.app/

## CI / CD Tests
A yml file contains the following:

Jest:
-Checks that the APIs renders 6 videos on the frontpage

Lint:
-Checks type and grammar code errors

Serverless function
-With netlify:
By pressing the button on the home page, a serverless fucntion runs "Mario, you ran a serverless function! ;)"

## APIs
APIs are stored in the .env file
Access https://developers.google.com/youtube/v3 to get your own APIs

The rest of the keys on the Fetch URL are public information, like the userId, channelId, and videoId.

