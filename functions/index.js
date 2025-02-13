const {onRequest} = require("firebase-functions/v2/https");

exports.helloWorld = onRequest((request, response) => {
    console.log("Hello logs!");
    response.send("Hello from Firebase!");
});
