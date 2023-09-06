const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose')


const userschema = new moongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 7,
    }
})

const UserModel = moongoose.model("User", userschema)

module.exports = UserModel;