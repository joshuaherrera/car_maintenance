const express = require('express');

require('./services/passport'); //executes passport config
const { User } = require('./models/index');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json()); // no need for body-parser

authRoutes(app);

app.get('/testdb', (req, res) => {
    User.create({
        username: 'testuser2'
    }).then(() => {
        console.log('created new user');
    });
    res.send({ user: 'made' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
