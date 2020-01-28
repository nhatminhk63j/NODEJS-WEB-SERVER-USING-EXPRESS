const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

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

app.listen(port, () => console.log('App listening on port ' + port));