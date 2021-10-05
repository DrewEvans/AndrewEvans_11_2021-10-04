const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./Routes/handler");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
/**
 * *log and listen to when the sever is live & what port
 */
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));

/**
 * *Enable All CORS Requests
 */
app.use(cors());

//static files & api data
app.use("/api", routesHandler);
//html webpages
//http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send({ express: "backend is connected and test" });
});
