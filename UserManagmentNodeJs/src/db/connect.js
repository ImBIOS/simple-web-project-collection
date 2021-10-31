require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudData', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connection With Database Started Successfully...')
}).catch((error) => {
    console.log('Error: Connection With Database Failed!', +error);
})