const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const enforce = require("express-sslify");


if (process.env.NODE_ENV !== "production") dotenv.config();

const stripe  = require(stripe)(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// converts a respond to a json format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// allows to use a request to the backend server
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// declaring a payment route
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "eur",
    metadata: {
      email: req.body.token.email,
    },
  };

  // creating a charge
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    console.log(stripeErr, stripeRes);
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

