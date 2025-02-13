const {onRequest} = require("firebase-functions/v2/https");

exports.randomNumber = onRequest((request, response) => {
    const randomNumber = Math.random();
    console.log("Random number:", randomNumber);
    response.send(randomNumber.toString());
});
