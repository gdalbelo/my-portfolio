const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB");
});