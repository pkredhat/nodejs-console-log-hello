const app = require("express")();


app.post("/", (req, res) => {
  let message = "hello from the console.log app! :-) ";
  res.send(JSON.stringify(message))
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log('App version 1.0 listening on: ', port);
});