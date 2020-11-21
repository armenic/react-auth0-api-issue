The purpose of this repo is to show the issue with auth0 quickstart "React: Call 
an API". The quickstart example app is supposed to fetch the user metadata from
auth0 api. Unfortunately it does not do that and shows "No user metadata defined".
I also looked in the the console log and it shows "user is udefined" in Profile.js
Interestingly, when app is already running and you modify something in the js 
file then the user metadata is correctly fetched and shown. I did a screen 
recording as well.

These are the steps I took to create and run the app

1. npx create-react-app
2. `npm install @auth0/auth0-react`
3. modify `src/index.js` as per 
https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component
4. create `src/Login.js` with the content of
https://auth0.com/docs/quickstart/spa/react#add-login-to-your-application
5. add login button to the `src/App.js`
6. create `src/Logout.js` with the content of https://auth0.com/docs/quickstart/spa/react#add-logout-to-your-application
7. create `src/Profile.js` file as per https://auth0.com/docs/quickstart/spa/react#show-user-profile-information
8. added audience and scope in `src/index.js` as per https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#set-up-the-auth0-service
9. modified the `src/Profile.js` as per first code snippet in https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#get-an-access-token
10. added useEffect hook into `src/Profile.js` Profile component as per second code snippet in https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#get-an-access-token
11. run the app with `run start --scripts-prepend-node-path=auto`
