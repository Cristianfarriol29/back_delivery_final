const express = require("express");
const cors = require("cors");
const { connect } = require("./src/utils/database/db");
const { configCloudinary } = require('./src/utils/cloudinary/config');

const beverageRoutes = require("./src/api/products/beverages/beverages.routes");
const dessertRoutes = require("./src/api/products/desserts/desserts.routes");
const pizzasRoutes = require("./src/api/products/pizzas/pizzas.routes");
const orderRoutes = require("./src/api/Orders/orders.routes");
const paymentRoutes = require("./src/api/Payment/payment.routes");
const statusRoutes = require("./src/api/Status/status.routes");

const UserRoutes = require("./src/api/users/users.routes");

const PORT = process.env.PORT || 8080;

const app = express();

connect();

configCloudinary();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4200"],
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));

app.use(
  express.urlencoded({
    limit: "5mb",
    extended: true,
  })
);

app.use("/api/users", UserRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/products/beverages", beverageRoutes);
app.use("/api/products/desserts", dessertRoutes);
app.use("/api/products/pizzas", pizzasRoutes);
app.use("/api/orders/checkout", paymentRoutes);
app.use("/api/status", statusRoutes);

app.use("*", (req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = "Route not found";
  return next(error);
});

app.use('*', (req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Route not found';
    return next(error);
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});