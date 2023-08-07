const {Schema, model} = require('mongoose');

const User = new Schema(
    {
        username: {
            type: String,
            required: [true,'Username is Required'],
            unique :[true,"User already exists"],
            minlength:[5,"Minimum length of Username should be 6"],
            maxlength:[20,"Maximum Length of Username Should Be Less Than or Equal to Twenty"],
        },
        email: {
            type: String,
            required: [true,'Email is Required'],
            unique :[true,"Email already exists"],
            maxlength:[35,"Maximum Length of Username Should Be Less Than or Equal to Twenty"],
        },
        password: {
            type: String,
            required: [true,'Password is Required'],
            minlength:[6,"Minimum length of Username should be 6"],
        },
    },
    {
        timestamps: true
    }
)

const Users = model('users', User)
module.exports = Users