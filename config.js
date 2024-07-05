const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://javiseraWeb:Seicento1976@javiseraWeb.pydyh1d.mongodb.net/?retryWrites=true&w=majority&appName=javiseraWeb').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;