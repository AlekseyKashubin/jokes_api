
const jokeController = require('../controllers/joke.controller')






//req = requset res = respond
module.exports = app => {
app.get("/api", jokeController.hello);

app.get("/api/jokes",jokeController.allJokes)

app.get("/api/jokes/:id", jokeController.oneJoke)

app.post("/api/jokes", jokeController.addJoke);

app.patch("/api/jokes/:id", jokeController.updateJoke);

app.delete("/api/jokes/:id", jokeController.deleteJoke);
}