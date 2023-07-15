const Joke = require("../models/joke.model")

module.exports = {
    // say hello
    hello: (req, res) => {
        res.json({ message: "Hello World" });
    },

    // get all
    allJokes: (req, res) => {
        Joke.find()
            .then(jokes => {
                res.json(jokes)
            })
            .catch((err) => {
                res.json(err)
            })
    },



    // get one 
    oneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(getOneJoke => {
                res.json({ joke: getOneJoke })
            })
            .catch((err) => {
                res.json(err)
            })
    },



    // add new user
    addJoke: (req, res) => {
        Joke.create(req.body)
            .then(newJoke => {
                res.json(newJoke)
            })
            .catch((err) => {
                res.json(err)
            })
    },



    // update one 
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true, runValidators: true }
        )
            .then(updatedJoke => {
                res.json({ joke: updatedJoke })
            })
            .catch((err) => {
                res.json(err)
            });
    },


    // delete one 
    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json(err)
            })
    }
}