const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    //this is the Secret key of stripe from my account
    "sk_test_51JJVq9Cv2b1YgzWRf6SIUYieXFHMl5yJf0TXFlOeNFfQ7qU0267xezFLRndRnironXv4eO7TsXNH2KTcSHo259VC00gVhy2C0t"   
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


//http://localhost:5001/clone-623c6/us-central1/api