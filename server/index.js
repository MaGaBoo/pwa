const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

//Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Const (el objeto lo hemos obtenido por consola)

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cNDm7DFQ_m0:APA91bH2stoy0Grjc_cUGTrWFra9zNubOi9iXbELZj8R9OcCPuv4z7oFoJQa0ZNyYHxcBZoTlb73culd8NAwn788zp4EjKQ1Bv00R1o5NUfe0GLL2d9GhRucwppId4-jK7LDKhrR4O-R",
  expirationTime: null,
  keys: {
    p256dh:
      "BM3TIeEt6IA_cURZdOhSPsSBVx0xoCaxY8Thp7dt4M4_AQNOAp44NVJnwPZCYktz_10RK0z1_IYsdGp2Cfwz2vI",
    auth: "kFNuQ8BebPZNSl4lvNm00g",
  },
};

const vapidKeys = {
  publicKey:
    "BEhIw5tV4kySDFW8CUthgqTWZcT83py3qfm5nPmUAhjKD9hNMDGY7duXtJTyly06kNsSk3_R5Y1kAPGraCrBTQk",
  privateKey: "qsqGPf4nz-YuaCYVNuNCRoYDnufmo_JoRZxIHGF2UqY",
};

webpush.setVapidDetails(
  "mailto:maria@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Routes
app.get("/", async (req, res, next) => {
  const payload = JSON.stringify({
    title: "Title",
    message: "Message body",
  });
  try {
    await webpush.sendNotification(pushSubscription, payload);
    await res.send("sent");
  } catch (error) {
    console.log(error);
  }
});

app.post("/subscription", (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200).json();
});

app.listen(8000, () => console.log("Server listening on port 8000"));
