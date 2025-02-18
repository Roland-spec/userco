const {onRequest} = require("firebase-functions/v2/https");

exports.randomNumber = onRequest((request, response) => {
    {cors : [/flutterflow\.app$/,/flutterflow\.io$/]}
    const random = Math.random();

    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    console.log("Random number between 1 and 100:", randomNumber);

    console.log("Random number:", randomNumber);
    console.log("Hello world");
    response.send(randomNumber.toString());
});
