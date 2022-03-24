const api = require("express").Router();
const userRoutes = require("./routes/userRoutes");


api.get("/", (req, res) => {
    res.send({ message: "Hello from server!" });
})
api.use('/users', userRoutes);


module.exports = api;