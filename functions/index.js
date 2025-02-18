const {onRequest} = require("firebase-functions/v2/https");

exports.randomNumber = onRequest((request, response) => {
    {cors : [/flutterflow\.app$/,/flutterflow\.io$/,]}
    const randomNumber = Math.random();

    const randomNumBetween1And100 = Math.floor(Math.random() * 100) + 1; 
    console.log("Random number between 1 and 100:", randomNumBetween1And100);

    console.log("Random number:", randomNumber);
    console.log("Hello world");
    response.send(randomNumberBetween1And100.toString());
});
