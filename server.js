let express = require("express")
let path = require("path")
let bodyParser = require("body-parser")

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, './app/public')))

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


app.listen(PORT, function() {
  console.log('listening on PORT: ' + PORT);
});
