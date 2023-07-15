const mongoose = require("mongoose");


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "please make a Joke"],
        minlength: [10, "joke is too short"]
    },
    punchline: {
        type: String,
        required: [true, "please enter a punchline"],
        minlength: [10, "punchline is too short"]
    }
});

const Joke = mongoose.model('Joke', JokeSchema)
module.exports = Joke;