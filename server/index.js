const express = require('express');
const cors = require('cors');
const {pinRoutes, userRoutes} = require('./routes/index');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const {PORT, mongoUri} = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/pin', pinRoutes)
app.use('/user', userRoutes)

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('mongodb connected'))
.catch((err) => console.log(err))



app.listen(PORT, () => console.log(`listening to port ${PORT}`))