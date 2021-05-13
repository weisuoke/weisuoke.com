const express = require('express')
const app = express()
const port = 3678

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index');
})

app.get('/todo', (req, res) => {
  res.render('pages/todo');
})

app.get('/workflow', (req, res) => {
  res.render('pages/workflow');
})

app.get('/about', (req, res) => {
  res.render('pages/about');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})