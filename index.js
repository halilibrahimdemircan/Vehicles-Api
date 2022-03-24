const dotenv = require("dotenv");

// handling uncaught exceptions
process.on("uncaughtException", err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.stack);
    process.exit(1);
});

// configuring dotenv so Node.js knows where to look
dotenv.config({ path: "./.config.env" });

// creating database instance and connecting
const { vehicledb } = require("./models/db");
// connect and sync db
vehicledb.authenticate()
    .then(() => console.log("connected vehicledb successfully!"))
    .catch(err => console.log("unable to connect vehicledb!", err));
vehicledb.sync({ force: false })
    .then(() => console.log("synced vehicledb successfully!"))
    .catch(err => console.log("unable to sync vehicledb!", err));

// importing express app
const app = require('./app');

// declaring the port variable
const PORT = process.env.PORT || 8000;

// setting up the express server
const server = app.listen(PORT, () => {
    console.log(`Server is awake on port ${PORT}:${process.env.NODE_ENV}`);
});

// handling unhandled rejections
process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.stack);
    server.close(() => {
        process.exit(1);
    });
});

// ensuring graceful shutdown in case sigterm received
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
        console.log('💥 Process terminated!');
    });
});