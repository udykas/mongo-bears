const mongoose = require('mongoose');

const definition = {
    species: {
        type: String,
        required: true,
        unique: true
    },
    latinName: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
}

const options = {
    timestamps: true
}

const bearSchema = new mongoose.Schema(definition, options)

const bearModel = mongoose.model('Bear', bearSchema)

module.exports = bearModel;