const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Mama!! I can code Node now helllo how are you!!!')
});

const users = [
    { id: 1, name: 'Sabana', email: ' sabana@gmail.com', phone: '0179999999' },
    { id: 2, name: 'Shabnoor', email: ' Shabnoor@gmail.com', phone: '0179999999' },
    { id: 3, name: 'Rubina', email: ' Rubina@gmail.com', phone: '0179999999' },
    { id: 4, name: 'Hasina', email: ' Hasina@gmail.com', phone: '0179999999' },
    { id: 5, name: 'Shokina', email: ' Shokina@gmail.com', phone: '0179999999' },
    { id: 6, name: 'Rusita', email: ' Rusita@gmail.com', phone: '0179999999' },
    { id: 7, name: 'Jorina', email: ' Jorina@gmail.com', phone: '0179999999' },
]

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flavor');
})


app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
    res.send(users);
})

app.listen(port, () => {
    console.log('Listening to post', port);
});