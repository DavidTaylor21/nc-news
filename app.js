const express = require("express");
const {getAllTopics} = require('./controllers/topics.controller')
const getEndpoints = require('./controllers/api.controller')
const {getArticleById} = require('./controllers/articles.controller')

const app = express();

app.get('/api', getEndpoints)

app.get("/api/topics", getAllTopics);

app.get("/api/articles/:article_id", getArticleById)

app.all('/api/*', (req,res) =>{
    res.status(404).send({msg: 'Page not found'})
})

app.use((err, req, res, next) => {
    res.status(500).send({ msg: "Internal Server Error" });
  });

module.exports = app;
