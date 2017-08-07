//boilerplate
const express = require('express');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()

app.engine('mustache', handlebar());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//end boilerplate

const todos = [];
const update = [];

app.get("/", function (req, res) {
  console.log(todos);
  console.log(update);
  res.render('home', {
    todos: todos,
    update: update
  });
})

app.post("/", function (req, res) {
  todos.push({'todo': req.body.item})
  res.redirect('/');
})

app.post("/update/:index", function (req, res){

  let selectedIndex = req.params.index;

  // TODO: Copy from todos array to update array
  // TODO: Delete from todos array


        update.push(todos[selectedIndex]);
  //   }
    todos.splice(selectedIndex,1);
  //   // console.log(update)
  // }

  res.redirect('/');
})

app.listen(3000, function(){
  console.log('running')
})
