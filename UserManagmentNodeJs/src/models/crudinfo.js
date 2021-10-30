const mongoose = require('mongoose');

const UserRecordSchema = new mongoose.Schema({


    Name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },

    Age: {
        type: Number,
        required: true,
        maxlength: 2,
    },

    City: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 9
    }
})

const SaveData = new mongoose.model('UserSaveData', UserRecordSchema);

module.exports = SaveData;