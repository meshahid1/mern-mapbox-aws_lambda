const {Schema, model} = require('mongoose');

const PinSchema = new Schema(
    {
        username: {
            type: String,
            required: [true,'Username is Required']
        },
        title: {
            type: String,
            required: [true,'title is Required'],
            minlength:[6,"Minimum length of Description should be 6"],
        },
        desc: {
            type: String,
            required: [true,'Description is Required'],
            minlength:[6,"Minimum length of Description should be 6"],
        },
        rating: {
            type: Number,
            required: [true,'Rating is Required'],
            minlength: 0,
            maxlength: 5,
        },
        lat: {
            type: Number,
            required: true,
        },
        long: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const PinLocation = model('pin', PinSchema)
module.exports = PinLocation