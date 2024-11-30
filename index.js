const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "ede66a332b85dad881d36e7fabacc0fe";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    unit +
    "&APPID=" +
    apiKey;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The Temperature in " +
          query +
          " is " +
          temp +
          " Degree Celsius</h2><p>The Weather is Currently " +
          weatherDescription +
          "</p>"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});
kkkkkkkk;

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
