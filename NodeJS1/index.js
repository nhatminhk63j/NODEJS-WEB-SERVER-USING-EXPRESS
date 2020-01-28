const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var users = [
    { id: 1, name: 'Pham Thi Lien' },
    { id: 2, name: 'Ngo Sach Nhat' }
]
app.get('/', (req, res) => res.render('index', {
    name: 'Express'
}));

app.get('/users', (req, res) => res.render('users/index', {
    users: users
}));

app.get('/users/search', (req, res) => {
    var q = req.query.q;
    var matchedUsers = users.filter((user) => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/index', {
        users: matchedUsers
    })
});

app.get('/users/create', (req, res) => {
    res.render('users/create');
})

app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users');
})

app.listen(port, () => console.log('App listening on port ' + port));