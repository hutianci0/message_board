const express = require('express')
const app = express()
const router = express.Router()



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + 'public'))
app.use(router)




const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', (req, res) => {
  res.render('index', { messages, title: 'mini message board' })


})

router.get('/new', (req, res) => {
  res.render('new', { messages, title: 'new Form' })
})

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  res.redirect("/")
})



app.listen(8080, () => console.log('app is running ......'))
