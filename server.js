const express = require("express");
const app = express();

app.get("/", function corsHeaderNotSet(request, response) {
  // just send response:
  response.sendFile(`${__dirname}/message.json`);
});

app.get("/allow-cors", function acceptAllOrigins(request, response) {
  // tell browser that this server allows all requester origins:
  response.set("Access-Control-Allow-Origin", "*");
  // then send response:
  response.sendFile(`${__dirname}/message.json`);
});

const listener = app.listen(process.env.PORT, function listenForRequests() {
  console.log(`App listening: port ${listener.address().port}`);
});
