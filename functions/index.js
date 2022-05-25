const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73")

const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get('/', (request, response) => response.status(200).send
("hello world"))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log("received nice man", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)