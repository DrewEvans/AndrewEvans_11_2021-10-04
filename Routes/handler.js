const express = require("express");
const database = require("../data.json");
const router = express.Router();
const app = express();

router.get("/data", (req, res) => {
  res.json(database);
});

//request data from apartment with unique ID
router.get("/appartement/:id", (req, res) => {
  //filter Appartment with id requested from the client
  const apartment = database.filter(function (apartment) {
    return apartment.id == req.params.id;
  });
  //send Appartment ID to the client
  res.json(apartment);
});

app.listen(80, () => {
  console.log("CORS-enabled web server listening on port 80");
});

module.exports = router;
