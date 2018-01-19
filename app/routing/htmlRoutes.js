// Dependencies
// =============================================================
var path = require("path");

module.exports = function(app) {

// HTML Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../results.html"));
  });
}
